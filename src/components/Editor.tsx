import React from 'react'
import QuillEditor from './QuillEditor'

export interface IEditor {
  initialValue: string
}
const Editor: React.FC<IEditor> = (props) => {
  return <QuillEditor {...props} />
}

export default Editor
