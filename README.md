# quill-editor-math

Rich text editor for React with Quill, KaTeX, MathQuill formula authoring, and image blot formatting.

[![NPM](https://img.shields.io/npm/v/quill-editor-math.svg)](https://www.npmjs.com/package/quill-editor-math)

## Install

```bash
npm install quill-editor-math
```

```bash
bun add quill-editor-math
```

```bash
yarn add quill-editor-math
```

## Peer Dependencies

`quill-editor-math` supports React 16, 17, 18, and 19 as a peer dependency.

## Basic Usage

```tsx
import { useState } from 'react'
import Editor from 'quill-editor-math'
import 'quill-editor-math/dist/index.css'

export default function App() {
  const [value, setValue] = useState('<p>Hello formula editor</p>')

  return (
    <Editor
      initialValue={value}
      onChange={setValue}
      placeholder='Write text and formulas...'
    />
  )
}
```

## Vite Example

This repository includes a React TypeScript Vite example in `example/`.

```bash
bun run build
cd example
bun install
bun run dev
```

The root build command is needed first because the example aliases `quill-editor-math` to the local `dist` output.

## Next.js Usage

Quill depends on browser globals, so load this package client-side.

```tsx
import dynamic from 'next/dynamic'
import 'quill-editor-math/dist/index.css'

const Editor = dynamic(() => import('quill-editor-math'), {
  ssr: false,
  loading: () => <p>Editor loading...</p>
})

export default function Page() {
  return <Editor initialValue='<p>Hello World!</p>' />
}
```

## Reset Example

```tsx
import { useState } from 'react'
import Editor from 'quill-editor-math'
import 'quill-editor-math/dist/index.css'

export default function App() {
  const [value, setValue] = useState('<p>Hello World!</p>')
  const [resetField, setResetField] = useState(false)

  return (
    <>
      <button type='button' onClick={() => setResetField(true)}>
        Reset
      </button>
      <Editor
        initialValue={value}
        onChange={setValue}
        resetField={resetField}
        setResetField={setResetField}
      />
    </>
  )
}
```

## Custom Operators

`customOperator` accepts tuples in this shape:

```tsx
const operators = [
  ['\\pm', '\\pm'],
  ['\\sqrt{x}', '\\sqrt'],
  ['\\frac{x}{y}', '\\frac']
]

<Editor customOperator={operators} />
```

## Custom Toolbar

Pass a Quill toolbar array to `toolbar`.

```tsx
<Editor
  toolbar={[
    ['bold', 'italic'],
    ['formula'],
    [{ list: 'ordered' }, { list: 'bullet' }]
  ]}
/>
```

## TypeScript

The package exports these public types:

```tsx
import type {
  IEditor,
  Operator,
  QuillEditorProps,
  Theme,
  Toolbar,
  ToolbarItem,
  UnprivilegedEditor
} from 'quill-editor-math'
```

`IEditor` is kept as an alias of `QuillEditorProps` for compatibility.

## API

| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `initialValue` | `string` | `''` | Initial HTML value. Later changes to this prop also update the editor content. |
| `onChange` | `(value: string) => void` | `undefined` | Called with the editor HTML whenever content changes. |
| `onBlur` | `(previousSelection, source, editor) => void` | `undefined` | Passed through to ReactQuill's `onBlur`. |
| `placeholder` | `string` | `'Write something..'` | Placeholder text for the editor. |
| `style` | `React.CSSProperties` | `undefined` | Inline style passed to the ReactQuill component. |
| `theme` | `'snow' \| 'bubble'` | `'snow'` | Quill theme. |
| `customOperator` | `Array<[string, string]>` | built-in math operators | Operators shown in the MathQuill formula authoring UI. |
| `toolbar` | `Toolbar` | built-in toolbar | Quill toolbar configuration. |
| `readOnly` | `boolean` | `false` | Makes the editor read-only. |
| `resetField` | `boolean` | `false` | When true, clears the editor content. |
| `setResetField` | `React.Dispatch<React.SetStateAction<boolean>>` | `undefined` | Optional setter used to turn `resetField` back to false after clearing. |

## Development

```bash
bun install
bun run build
```

Run the Vite example:

```bash
bun run build
cd example
bun install
bun run dev
```

## License

MIT © [vieyama](https://github.com/vieyama)
