import $ from 'jquery'
import katex from 'katex'
import React, { useEffect, useRef, useState } from 'react'
import ReactQuill, { Quill } from 'react-quill'
import BlotFormatter from 'quill-blot-formatter'
import type { Operator, QuillEditorProps, Toolbar } from '../interface'

declare global {
  interface Window {
    katex: typeof katex
    jQuery: JQueryStatic
    $: JQueryStatic
  }
}

type Mathquill4quill = (arg0: {
  Quill: typeof Quill
  katex: typeof katex
}) => (
  quill: ReturnType<ReactQuill['getEditor']>,
  options: { operators: Operator[]; displayHistory: boolean }
) => void

let mathquill4quill: Mathquill4quill | undefined
if (typeof window !== 'undefined') {
  window.katex = katex
  window.jQuery = window.$ = $
  mathquill4quill = require('mathquill4quill') as Mathquill4quill
  require('@edtr-io/mathquill/build/mathquill.js')
}

Quill.register('modules/blotFormatter', BlotFormatter)

const customOperator: Operator[] = [
  ['\\pm', '\\pm'],
  ['\\sqrt{x}', '\\sqrt'],
  ['\\sqrt[3]{x}', '\\sqrt[3]{}'],
  ['\\sqrt[n]{x}', '\\nthroot'],
  ['\\frac{x}{y}', '\\frac'],
  ['\\sum^{s}_{x}{d}', '\\sum'],
  ['\\prod^{s}_{x}{d}', '\\prod'],
  ['\\coprod^{s}_{x}{d}', '\\coprod'],
  ['\\int^{s}_{x}{d}', '\\int'],
  ['\\binom{n}{k}', '\\binom']
]

const defaultToolbar: Toolbar = [
  ['bold', 'italic', 'underline', 'strike'],
  ['blockquote', 'code-block'],
  [{ list: 'ordered' }, { list: 'bullet' }],
  [{ script: 'sub' }, { script: 'super' }],
  [{ header: [1, 2, 3, false] }],
  [{ direction: 'rtl' }],
  ['link', 'image', 'formula'],
  [{ color: [] }, { background: [] }],
  [{ align: [] }],
  ['clean']
]

const QuillEditor: React.FC<QuillEditorProps> = ({
  customOperator: operators,
  initialValue,
  onBlur,
  onChange,
  placeholder,
  readOnly,
  resetField,
  setResetField,
  style,
  theme,
  toolbar
}) => {
  const reactQuill = useRef<ReactQuill | null>(null)
  const didAttachQuillRefs = useRef(false)

  const [editorHtml, setEditorHtml] = useState(initialValue || '')

  const attachQuillRefs = () => {
    if (didAttachQuillRefs.current || !mathquill4quill) return

    const editor = reactQuill.current?.getEditor()
    if (!editor) return

    const enableMathQuillFormulaAuthoring = mathquill4quill({ Quill, katex })
    enableMathQuillFormulaAuthoring(editor, {
      operators: operators || customOperator,
      displayHistory: true
    })
    didAttachQuillRefs.current = true
  }

  useEffect(() => {
    attachQuillRefs()
  }, [])

  useEffect(() => {
    if (initialValue !== undefined) {
      setEditorHtml(initialValue)
    }
  }, [initialValue])

  useEffect(() => {
    if (resetField) {
      setEditorHtml('')
      setResetField && setResetField(false)
    }
  }, [resetField, setResetField])

  const handleChange = (value: string) => {
    setEditorHtml(value)
    onChange && onChange(value)
  }

  return (
    <ReactQuill
      ref={reactQuill}
      modules={{
        formula: true,
        toolbar: toolbar || defaultToolbar,
        clipboard: {
          matchVisual: false
        },
        blotFormatter: {}
      }}
      value={editorHtml}
      onChange={handleChange}
      onBlur={onBlur}
      theme={theme || 'snow'}
      placeholder={placeholder || 'Write something..'}
      bounds='.quill'
      readOnly={readOnly}
      style={style}
    />
  )
}

export default QuillEditor
