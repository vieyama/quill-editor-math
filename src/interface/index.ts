import type React from 'react'
import { DeltaStatic, RangeStatic, BoundsStatic, Sources } from 'quill'

export type Operator = [string, string]
export type Theme = 'snow' | 'bubble'
export type ToolbarItem = string | Record<string, unknown>
export type Toolbar = Array<ToolbarItem | ToolbarItem[]>

export interface UnprivilegedEditor {
  getLength(): number
  getText(index?: number, length?: number): string
  getHTML(): string
  getBounds(index: number, length?: number): BoundsStatic
  getSelection(focus?: boolean): RangeStatic
  getContents(index?: number, length?: number): DeltaStatic
}

export interface QuillEditorProps {
  initialValue?: string
  onChange?: (value: string) => void
  onBlur?: (
    previousSelection: RangeStatic | null,
    source: Sources,
    editor: UnprivilegedEditor
  ) => void
  placeholder?: string
  style?: React.CSSProperties
  theme?: Theme
  customOperator?: Operator[]
  toolbar?: Toolbar
  readOnly?: boolean
  resetField?: boolean
  setResetField?: React.Dispatch<React.SetStateAction<boolean>>
}

export type IEditor = QuillEditorProps
