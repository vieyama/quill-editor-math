import React from 'react'
import { createRoot } from 'react-dom/client'
import QuillEditor from 'quill-editor-math'
import 'quill-editor-math/dist/index.css'
import './styles.css'

const App = () => {
  const [value, setValue] = React.useState(
    '<p>Try inserting a formula like <span class="ql-formula" data-value="x^2+y^2=z^2"></span></p>'
  )

  return (
    <main className='app-shell'>
      <section className='editor-pane'>
        <header>
          <h1>Quill Editor Math</h1>
          <p>Local Vite example for testing the published build.</p>
        </header>

        <QuillEditor
          initialValue={value}
          onChange={setValue}
          placeholder='Write text and formulas...'
        />
      </section>

      <aside className='preview-pane'>
        <h2>HTML Output</h2>
        <pre>{value}</pre>
      </aside>
    </main>
  )
}

const rootElement = document.getElementById('root')

if (rootElement) {
  createRoot(rootElement).render(<App />)
}
