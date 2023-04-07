# quill-editor-math

> Rich text editor with react quill, mathquill4quill, katex, and image resizer. you can use formula with this. 👌🏻

[![NPM](https://img.shields.io/npm/v/quill-math.svg)](https://www.npmjs.com/package/quill-math) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Demo
[Stackblitz](https://stackblitz.com/edit/nextjs-m1go95?file=pages%2Findex.js)

## Install

```bash
npm install --save quill-editor-math
```

or

```
yarn add quill-editor-math
```

## Usage

### React

```tsx
import React, { Component } from 'react'

import Editor from 'quill-editor-math'
import 'quill-editor-math/dist/index.css'

class Example extends Component {
  render() {
    return <Editor initialValue='Hello World!' />
  }
}
```

### NextJS

```tsx
import dynamic from 'next/dynamic';
import 'quill-editor-math/dist/index.css';

const Editor = dynamic(() => import('quill-editor-math')
.then((mod) => mod.default), {
    ssr: false,
    loading: () => <p>Editor loading ...</p>,
  }
);

export default function Example() {
  return (
   <Editor initialValue='Hello World!' />
  );
}

```

#### If you want to reset field of this text editor, you can try this 👇

```tsx
import { useState } from 'react';
import dynamic from 'next/dynamic';
import 'quill-editor-math/dist/index.css';

const Editor = dynamic(() => import('quill-editor-math')
.then((mod) => mod.default), {
    ssr: false,
    loading: () => <p>Editor loading ...</p>,
  }
);

export default function Example() {
  const [resetField, setResetField] = useState(false);

  return (
   <>
        <button onClick={() => setResetField(true)}>Reset Field</button>
        <Editor initialValue='Hello World!' resetField={resetField} setResetField={setResetField} />
   </>
  );
}

```

## API
| Property       | Description                                                                                             | Type                                        | Default                                     |
|----------------|---------------------------------------------------------------------------------------------------------|---------------------------------------------|---------------------------------------------|
| initialValue   | the initial value to be inserted into the text editor                                                   | String                                      | ""                                          |
| onChange       | Callback when user input                                                                                | function(value, delta, source, editor)      | false                                       |
| onBlur         | Called when leaving the component                                                                       | function(previousSelection, source, editor) | false                                       |
| placeholder    | The placeholder of input                                                                                | String                                      | -                                           |
| style          | HTML CSS style                                                                                          | React.CSSProperties                         | -                                           |
| theme          | Quill Editor themes                                                                                     | String - "bubble \| snow"                   | "snow"                                      |
| customOperator | Operator that will appear in the equation, you can write latex formula.                                 | array                                       | [['\\pm', '\\pm'], ['\\sqrt{x}', '\\sqrt']] |
| toolbar        | Quill Toolbar Options, you can read more here: https://quilljs.com/docs/modules/toolbar/#toolbar-module | array                                       | -                                           |
| resetField        | variable state for reset field of the text editor | boolean                                       | false                                           |
| setResetField        | if you pass 'resetField' into props, you have to pass 'setResetField' too, it will set back resetField into false | React.Dispatch<React.SetStateAction<boolean>>                                       | -                                           |
## License

MIT © [vieyama](https://github.com/vieyama)
