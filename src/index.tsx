import * as React from 'react'
import Editor from './components/Editor'

interface Props {
  initialValue: string
}

export const QuillEditor = ({ initialValue }: Props) => {
  return <Editor initialValue={initialValue} />
}
