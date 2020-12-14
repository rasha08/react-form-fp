import React, { useState } from 'react'

const ExampleWrapper = ({ title, id, example: Example, doc: Doc }: any) => {
  const [docsOpen, setDocsOpen] = useState(false)
  return (
    <>
      <div className={'margin-top-large'} />
      <hr />
      <h4 id={id}>{title}</h4>
      <div className='example row'>
        <Example />
        <div className={'example-doc'}>{docsOpen && <Doc />}</div>
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
