import $ from 'jquery'
import katex from 'katex'
import React, { useEffect, useRef, useState } from 'react'
import ReactQuill, { Quill } from 'react-quill'
import BlotFormatter from 'quill-blot-formatter'
import { IEditor } from '../interface'

let mathquill4quill: (arg0: { Quill: typeof Quill; katex: any }) => any
if (typeof window !== 'undefined') {
  // @ts-ignore
  window.katex = katex
  // @ts-ignore
  window.jQuery = window.$ = $
  mathquill4quill = require('mathquill4quill')
  require('@edtr-io/mathquill/build/mathquill.js')
}

Quill.register('modules/blotFormatter', BlotFormatter)

const customOperator = [
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

const QuillEditor = (props: IEditor) => {
  const defaultToolbar = [
    ['bold', 'italic', 'underline', 'strike'], // toggled buttons
    ['blockquote', 'code-block'],

    [{ list: 'ordered' }, { list: 'bullet' }],
    [{ script: 'sub' }, { script: 'super' }], // superscript/subscript
    [{ header: [1, 2, 3, false] }],
    [{ direction: 'rtl' }],
    ['link', 'image', 'formula'],

    [{ color: [] }, { background: [] }], // dropdown with defaults from theme
    [{ align: [] }],

    ['clean'] // remove formatting button
  ]

  const reactQuill = useRef(null)

  const [editorHtml, setEditorHtml] = useState('')
  let didAttachQuillRefs = false
  const attachQuillRefs = () => {
    if (!didAttachQuillRefs) {
      const enableMathQuillFormulaAuthoring = mathquill4quill({ Quill, katex })
      // @ts-ignore
      enableMathQuillFormulaAuthoring(reactQuill?.current.editor, {
        operators: props.customOperator || customOperator,
        displayHistory: true
      })
      didAttachQuillRefs = true
    }
  }

  useEffect(() => {
    attachQuillRefs()
  }, [])

  useEffect(() => {
    if (props.initialValue) {
      setEditorHtml(props.initialValue)
    }
  }, [props.initialValue])

  useEffect(() => {
    if (props.resetField) {
      setEditorHtml('')
    }
  }, [props.resetField])

  const handleChange = (value: string) => {
    setEditorHtml(value)
    props.onChange && props.onChange(value)
  }

  return (
    <ReactQuill
      ref={reactQuill}
      modules={{
        formula: true,
        toolbar: props.toolbar || defaultToolbar,
        clipboard: {
          // toggle to add extra line breaks when pasting HTML:
          matchVisual: false
        },
        blotFormatter: {}
      }}
      value={editorHtml}
      onChange={handleChange}
      // @ts-ignore
      onBlur={props.onBlur}
      theme={props.theme || 'snow'}
      placeholder={props.placeholder || 'Write something..'}
      bounds='.quill'
      readOnly={props.readOnly}
    />
  )
}

export default QuillEditor
