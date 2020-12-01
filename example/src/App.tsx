import React from 'react'

import './index.css'

const App = () => {
  return (
    <div className='container-fluid'>
      <nav className='border fixed split-nav'>
        <div className='nav-brand'>
          <h3>
            <a href='/'>React Form FP</a>
          </h3>
        </div>
        <div className='collapsible'>
          <input id='collapsible1' type='checkbox' name='collapsible1' />
          <label htmlFor='collapsible1'>
            <div className='bar1' />
            <div className='bar2' />
            <div className='bar3' />
          </label>
          <div className='collapsible-body'>
            <ul className='inline'>
              <li>
                <a href='/'>About</a>
              </li>
              <li>
                <a href='/'>Documentation</a>
              </li>
              <li>
                <a
                  href='https://github.com/rasha08/react-form-fp'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Github
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className='row flex-center beta-warn'>
        <div className='md-6'>
          <input className='alert-state' id='alert-4' type='checkbox' />
          <div className='alert alert-warning dismissible'>
            React Form FP library is still in beta version
            <label className='btn-close' htmlFor='alert-4'>
              X
            </label>
          </div>
        </div>
      </div>
      <div className='row flex-center'>
        <div className='md-3 sidebar'>
          <div className='paper'>
            <h4><a href="#about" >About</a></h4>
            <h4><a href="#installation" >Installation</a></h4>
          </div>
        </div>
        <div className='md-8 offset-1'>
          <div className='paper'>
            <h1 id='about'>React Form FP</h1>
            <hr />
            <blockquote>
              Yet another form library for React, created as context provider,
              following functional programming principles.{' '}
            </blockquote>
            <hr />
            <p>
              React Form FP is a state management and validation library for
              easy form manipulation. Entire API is exposed though context
              provider, so it makes it easy to work with <b>class components</b>{' '}
              or <b>functional components</b>
            </p>

            <p>
              Library has two major functionalities <b>FormContext</b> for form
              state and validation and <b>WizardContext</b> for multi-step
              forms.
            </p>

            <h2 id='installation'>Installation</h2>
            <p>Install the package from <b>NPM</b> by running:</p>
            <code>
              npm install react-form-fp
            </code>
            <p> or</p>
            <code>
              yarn add react-form-fp
            </code>
            <h2 id='usage'>Usage</h2>


          </div>
        </div>
      </div>
    </div>
  )
}

export default App
