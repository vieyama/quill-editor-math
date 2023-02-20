import $ from 'jquery'
import katex from 'katex'
import React from 'react'
import ReactQuill, { Quill } from 'react-quill'
// @ts-ignore
import ImageResize from 'quill-image-resize-module-react'

let mathquill4quill: (arg0: { Quill: typeof Quill; katex: any }) => any
if (typeof window !== 'undefined') {
  // @ts-ignore
  window.katex = katex
  // @ts-ignore
  window.jQuery = window.$ = $
  mathquill4quill = require('mathquill4quill')
  require('@edtr-io/mathquill/build/mathquill.js')
}

Quill.register('modules/imageResize', ImageResize)

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
class QuillEditor extends React.Component {
  constructor(props: {} | Readonly<{}>) {
    super(props)
    // @ts-ignore
    this.reactQuill = React.createRef()
    this.state = {
      // @ts-ignore
      editorHtml: this.props.initialValue,
      theme: 'snow',
      placeholder: 'Write something...'
    }
    this.handleChange = this.handleChange.bind(this)
    this.attachQuillRefs = this.attachQuillRefs.bind(this)
  }

  handleChange(html: string) {
    this.setState({ editorHtml: html })
    // @ts-ignore
    this.props.onChange(html)
  }

  componentDidMount() {
    // @ts-ignore
    if (!this.didAttachQuillRefs) {
      this.attachQuillRefs()
      // @ts-ignore
      this.didAttachQuillRefs = true
    }
  }

  componentDidUpdate(prevProps: { initialValue: string }) {
    // do something
    if (prevProps.initialValue === '') {
      // eslint-disable-next-line react/no-did-update-set-state
      this.setState({
        // @ts-ignore
        editorHtml: this.props.initialValue
      })
    }
  }

  attachQuillRefs() {
    const enableMathQuillFormulaAuthoring = mathquill4quill({ Quill, katex })
    // @ts-ignore
    enableMathQuillFormulaAuthoring(this.reactQuill.current.editor, {
      // @ts-ignore
      operators: this.props.customOperator || customOperator,
      displayHistory: true
    })
  }

  render() {
    const defaultToolbar = [
      ['bold', 'italic', 'underline', 'strike'], // toggled buttons
      ['blockquote', 'code-block'],

      [{ list: 'ordered' }, { list: 'bullet' }],
      [{ script: 'sub' }, { script: 'super' }], // superscript/subscript
      [{ header: [1, 2, 3, false] }],

      ['link', 'image', 'formula'],

      [{ color: [] }, { background: [] }], // dropdown with defaults from theme
      [{ align: [] }],

      ['clean'] // remove formatting button
    ]

    return (
      // @ts-ignore
      <ReactQuill
        // @ts-ignore
        ref={this.reactQuill}
        modules={{
          formula: true,
          // @ts-ignore
          toolbar: this.props.toolbar || defaultToolbar,
          clipboard: {
            // toggle to add extra line breaks when pasting HTML:
            matchVisual: false
          },
          imageResize: {
            parchment: Quill.import('parchment'),
            modules: ['Resize', 'DisplaySize']
          }
        }}
        // @ts-ignore
        value={this.state.editorHtml}
        // @ts-ignore
        style={this.state.style}
        // @ts-ignore
        onChange={this.handleChange}
        // @ts-ignore
        onBlur={this.props.onBlur}
        // @ts-ignore
        theme={this.props.theme || 'snow'}
        // @ts-ignore
        placeholder={this.props.placeholder || 'Write something..'}
        bounds='.quill'
      />
    )
  }
}

export default QuillEditor
