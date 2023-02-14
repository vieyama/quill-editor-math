import * as React from 'react'
import Editor from './components/Editor'
import './styles.module.css'

interface Props {
  initialValue: string
}

const QuillEditor = ({ initialValue }: Props) => {
  return <Editor initialValue={initialValue} />
}

export default QuillEditor
