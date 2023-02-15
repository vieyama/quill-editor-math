/* eslint-disable no-unused-vars */
import * as React from 'react'
import Editor from './components/Editor'
import type { IEditor } from './components/Editor'
import './styles.module.css'

const QuillEditor: React.FC<IEditor> = (props) => {
  return <Editor {...props} />
}

export default QuillEditor
