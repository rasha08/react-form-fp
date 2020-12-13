import React, { useState } from 'react'
// @ts-ignore
import ReactMarkdown from 'react-markdown'

const ExampleWrapper = ({ title, id, example: Example, doc }: any) => {
  const [docsOpen, setDocsOpen] = useState(false)
  return (
    <>
      <h4 id={id}>{title}</h4>
      <div className='example row'>
        <Example />
        <div className={'example-doc'}>
          {docsOpen && <ReactMarkdown source={doc} />}
        </div>
        <button
          className='example-toggle'
          onClick={() => setDocsOpen((p) => !p)}
        >
          {docsOpen ? 'Hide Code' : 'Show Code'}
        </button>
      </div>
    </>
  )
}

export default ExampleWrapper
