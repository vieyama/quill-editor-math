import React from 'react'
import QuillEditor from './QuillEditor'
import type { QuillEditorProps } from '../interface'

const Editor: React.FC<QuillEditorProps> = (props) => {
  return <QuillEditor {...props} />
}

export default Editor
