import React from 'react'

const Usage = () => {
  return (
    <>
      <h2 id='usage'>Usage</h2>
      <p>Form Context has on 3 major blocks</p>
      <ul>
        <li>Form State and Errors</li>
        <li>Field value update handler</li>
        <li>
          Validators
          <ul>
            <li>Single Field Validator</li>
            <li>Entire Form Validator</li>
          </ul>
        </li>
      </ul>
      <h4>Form State</h4>
      <p>
        Form State is created from the initial state provided to the{' '}
        <b>
          <i>FormContextProvider</i>
        </b>{' '}
        and extended with errors property.
      </p>
      <code>{`<FormContextProvider initialState={...} ...> ... </FormContextProvider>`}</code>
      <p>
        State model is really simple but strict, initial state must have form
        name as top level key, and form fields as nested level properties, this
        is because of support for multiple forms on single view as well as
        multiple steps forms (Wizard).
      </p>
      <p>
        <i>
          So for example if we want to handle login form which have a username
          and password fields, our initial state model would look like this:
        </i>
      </p>
      <code>
        {`
        const initialState = {
          login: {
            username: '',
            password: ''
          }
        }
        `}
      </code>
    </>
  )
}

export default Usage
