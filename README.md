# quill-editor-math

> Rich text editor with react quill, mathquill4quill, katex, and image resizer. you can use formula with this. 👌🏻

[![NPM](https://img.shields.io/npm/v/quill-math.svg)](https://www.npmjs.com/package/quill-math) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

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

## License

MIT © [vieyama](https://github.com/vieyama)
