import React from 'react'

const Usage = () => {
  return (
    <>
      <h2 id='usage'>Usage</h2>
      <p>Form Context has on 2 major blocks</p>
      <ul>
        <li>
          State
          <ul>
            <li>Form State and Errors</li>
            <li>Field value update handler</li>
          </ul>
        </li>
        <li>
          Validation Schema
          <ul>
            <li>Schema</li>
            <li>
              Validators
              <ul>
                <li>Single Field Validator</li>
                <li>Entire Form Validator</li>
                <li>Registering New Validators Dynamically</li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
      <h4 id='form-state'>Form State</h4>
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
      <p>
        And inside of your component you can consume that state by using{' '}
        <b>
          <i>useFormContext()</i>
        </b>
      </p>
      <code>{`const { state: { login } } = useFormContext()`}</code>
      <p>
        And this login object is of same structure as you initial state, so you
        can now have some input with value, for example,{' '}
        <b>
          <i>username</i>
        </b>
      </p>
      <code>{`<input value={login.username} ... />`}</code>

      <h4 id='handle-change'>Field value update handler</h4>
      <p>
        To update any field value inside the form you need to use{' '}
        <b>
          <i>setFieldValue</i>
        </b>{' '}
        handler from{' '}
        <b>
          <i>useFormContext</i>
        </b>
        . It is a very simple method that is in charge of updating specific
        field within the form.
      </p>
      <p>
        Method is curried function and accepts 3 params{' '}
        <b>
          <i>formName</i>
        </b>
        <i>(form key in FormContext state) </i>
        <b>
          <i>field</i>
        </b>
        <i>(key within the form) </i>
        <b>
          <i>value</i>
        </b>
        <i>(new value for the field)</i>
      </p>
      <code>{`const { setFieldValue } = useFormContext()`}</code>
      <br />
      <code>...</code>
      <br />
      <code>{`const handleFormChange = setFieldValue('login')`}</code>
      <br />
      <code>
        {`const handleFieldChange = (field) => ({ target: { value }}) => handleFormChange(field)(value);`}
      </code>
      <br />
      <code>...</code>
      <br />
      <code>{`<input value={login.username} onChange={handleFieldChange('username')} ... />`}</code>

      <h4 id='reading-errors'>Errors</h4>
      <p>
        Errors are stored inside of the{' '}
        <b>
          <i>FormContext state</i>
        </b>{' '}
        by the{' '}
        <b>
          <i>errors</i>
        </b>{' '}
        key and every form field that has a defined validator have either{' '}
        <b>
          <i>null</i>
        </b>{' '}
        or{' '}
        <b>
          <i>string</i>
        </b>{' '}
        value
      </p>
      <p>
        In our login example, error message logic for <i>username</i> field
        should look something like this
      </p>
      <code>...</code>
      <br />
      <code>{`{!!errors.username && <p className='text-danger'>{errors.username}</p>} `}</code>
      <br />
      <code>...</code>

      <h4 id='validation-schema'>Validation Schema</h4>
      <p>
        Validation schema is used to define form validation and it follows the
        same structure as initial form state
      </p>
      <code>{`{ [formName]: { formField: validatorFunc } }`}</code>
      <p>
        Validator function is a simple function that accepts a value and returns
        either{' '}
        <b>
          <i>string | null</i>
        </b>
      </p>
      <p>
        {' '}
        <b>
          <i>ValidationSchema</i>
        </b>{' '}
        is generic type accepts two additional types{' '}
        <b>
          <i>FormName</i>
        </b>{' '}
        <b>
          <i>FormType</i>
        </b>
        <code>
          {`
          export type Validator<VT = unknown, ST = unknown> = (
            value: VT,
            state?: ST
          ) => string | null

          export type ValidationSchema<
            FormName extends number | string = string,
            FormField extends number | string = string
          > = {
            [key in FormName]: {
              [key in FormField]: Validator
            }
          }
          `}
        </code>
      </p>
      <p>So for our login form we can define a validation schema:</p>
      <code>{`   {
        login: {
         firstName: (val: string) => !!val.trim() ? null : 'First name is required',
         lastName: () => null // Empty validator
       }
    }`}</code>
      <p>
        The idea behind it is really simple, every field that has a defined
        validator will be validated against it, and if validator returns a{' '}
        <b>
          <i>null</i>
        </b>{' '}
        field is valid.
      </p>

      <h4 id='single-field-validator'>Single Field Validator</h4>
      <p>
        Field validator is a function which takes field value as an argument and
        returns either string or null. Additionally every validator gets a{' '}
        <b>
          <i>FormContext state</i>
        </b>{' '}
        as second a parameter, which can be useful when writing a conditional
        validations{' '}
        <i>
          <small>
            (if the field validation logic depends on a another field value
            within the state. ex: Passport number validation is bound to
            selected country)
          </small>
        </i>
      </p>
      <p>Validator function type is:</p>
      <code>{`type Validator<VT, ST> = (value: VT, state?: ST) => string | null`}</code>

      <h4 id='validate-form'>Validate Entire Form</h4>
      <p>
        Validate entire form will run all defined validator and return{' '}
        <b>true</b> or <b>false</b>, also while running the validators will set
        form errors if any of the validator fails
      </p>
      <p>Validate form function type is</p>
      <code>{`ValidateForm<FormName extends string | number, T> = (formName: FormName, values: T) => boolean`}</code>

      <h4 id='set-field-validator'>Set Field Validator</h4>
      <p>
        Set filed validator is used for adding, removing or updating validators
        from initial validation schema.
      </p>
      <p>Type of setValidator function is: </p>
      <code>{`SetValidator<FormName extends string | number, T, ValueType = unknown> = (
  formName: FormName,
  field: keyof T,
  validator: Validator<ValueType>
) => void`}</code>
    </>
  )
}

export default Usage
