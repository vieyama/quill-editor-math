import React from 'react'
import QuillEditor from './QuillEditor'
import 'katex/dist/katex.min.css'
import '@edtr-io/mathquill/build/mathquill.css'
import 'mathquill4quill/mathquill4quill.css'
import 'react-quill/dist/quill.snow.css'

export interface IEditor {
  initialValue: string
}
const Editor: React.FC<IEditor> = (props) => {
  return <QuillEditor {...props} />
}

export default Editor
