import * as React from 'react'
import Editor from './components/Editor'
import './styles.module.css'
import type { QuillEditorProps } from './interface'
export * from './interface'

const QuillEditor: React.FC<QuillEditorProps> = (props) => {
  return <Editor {...props} />
}

export default QuillEditor
