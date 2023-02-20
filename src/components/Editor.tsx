/* eslint-disable no-unused-vars */
import React from 'react'
import QuillEditor from './QuillEditor'
import { IEditor } from '../interface'

const Editor: React.FC<IEditor> = (props) => {
  return <QuillEditor {...props} />
}

export default Editor
