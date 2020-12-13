import React from 'react'

const About = () => (
  <>
    <h1 id='about'>React Form FP</h1>
    <hr />
    <blockquote>
      Yet another form library for React, created as context provider, following
      functional programming principles.{' '}
    </blockquote>
    <hr />
    <p>
      React Form FP is a state management and validation library for easy form
      manipulation. Entire API is exposed though context provider, so it makes
      it easy to work with <b>class components</b> or{' '}
      <b>functional components</b>
    </p>

    <p>
      Library has two major functionalities <b>FormContext</b> for form state
      and validation and <b>WizardContext</b> for multi-step forms.
    </p>
  </>
)

export default About
