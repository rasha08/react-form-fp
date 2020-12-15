# React Form FP

---

> Yet another form library for React, created as context provider, following functional programming principles.

---

React Form FP is a state management and validation library for easy form manipulation. Entire API is exposed though context provider, so it makes it easy to work with **class components** or **functional components**

Library has two major functionalities **FormContext** for form state and validation and **WizardContext** for multi-step forms.

## Installation

Install the package from **NPM** by running:

`npm install react-form-fp`

or

`yarn add react-form-fp`

## Usage

Form Context has on 2 major blocks

- State
  - Form State and Errors
  - Field value update handler
- Validation Schema
  - Schema
  - Validators
    - Single Field Validator
    - Entire Form Validator
    - Registering New Validators Dynamically

#### Form State

Form State is created from the initial state provided to the **_FormContextProvider_** and extended with errors property.

`<FormContextProvider initialState={...} ...> ... </FormContextProvider>`

State model is really simple but strict, initial state must have form name as top level key, and form fields as nested level properties, this is because of support for multiple forms on single view as well as multiple steps forms (Wizard).

_So for example if we want to handle login form which have a username and password fields, our initial state model would look like this:_

`const initialState = { login: { username: '', password: '' } }`

And inside of your component you can consume that state by using **_useFormContext()_**

`const { state: { login } } = useFormContext()`

And this login object is of same structure as you initial state, so you can now have some input with value, for example, **_username_**

`<input value={login.username} ... />`

#### Field value update handler

To update any field value inside the form you need to use **_setFieldValue_** handler from **_useFormContext_**. It is a very simple method that is in charge of updating specific field within the form.

Method is curried function and accepts 3 params **_formName_**_(form key in FormContext state)_ **_field_**_(key within the form)_ **_value_**_(new value for the field)_

`const { setFieldValue } = useFormContext()`
`...`
`const handleFormChange = setFieldValue('login')`
`const handleFieldChange = (field) => ({ target: { value }}) => handleFormChange(field)(value);`
`...`
`<input value={login.username} onChange={handleFieldChange('username')} ... />`

#### Errors

Errors are stored inside of the **_FormContext state_** by the **_errors_** key and every form field that has a defined validator have either **_null_** or **_string_** value

In our login example, error message logic for _username_ field should look something like this

`...`
`{!!errors.username && <p className='text-danger'>{errors.username}</p>}`
`...`

#### Validation Schema

Validation schema is used to define form validation and it follows the same structure as initial form state

`{ [formName]: { formField: validatorFunc } }`

Validator function is a simple function that accepts a value and returns either **_string | null_**

**_ValidationSchema_** is generic type accepts two additional types **_FormName_** **_FormType_** `export type Validator<VT = unknown, ST = unknown> = ( value: VT, state?: ST ) => string | null export type ValidationSchema< FormName extends number | string = string, FormField extends number | string = string > = { [key in FormName]: { [key in FormField]: Validator } }`

So for our login form we can define a validation schema:

`{ login: { firstName: (val: string) => !!val.trim() ? null : 'First name is required', lastName: () => null // Empty validator } }`

The idea behind it is really simple, every field that has a defined validator will be validated against it, and if validator returns a **_null_** field is valid.

#### Single Field Validator

Field validator is a function which takes field value as an argument and returns either string or null. Additionally every validator gets a **_FormContext state_** as second a parameter, which can be useful when writing a conditional validations _(if the field validation logic depends on a another field value within the state. ex: Passport number validation is bound to selected country)_

Validator function type is:

`type Validator<VT, ST> = (value: VT, state?: ST) => string | null`

#### Validate Entire Form

Validate entire form will run all defined validator and return **true** or **false**, also while running the validators will set form errors if any of the validator fails

Validate form function type is

`ValidateForm<FormName extends string | number, T> = (formName: FormName, values: T) => boolean`

#### Set Field Validator

Set filed validator is used for adding, removing or updating validators from initial validation schema.

Type of setValidator function is:

`SetValidator<FormName extends string | number, T, ValueType = unknown> = ( formName: FormName, field: keyof T, validator: Validator<ValueType> ) => void`

## Examples

---

#### Simple Form validation

```tsx
import React, { useCallback, ChangeEvent } from 'react'
import {
  FormContextProvider,
  ValidationSchema,
  useFormContext
} from 'react-form-fp'

enum FormName {
  Example = 'example'
}
enum FormField {
  FirstName = 'firstName',
  LastName = 'lastName'
}

type FormState = {
  firstName: string
  lastName: string
}

const validation: ValidationSchema<FormName, FormField> = {
  example: {
    firstName: (val: string) =>
      !!val.trim() ? null : 'First name is required',
    lastName: () => null // Empty validator
  }
}

const SimpleFormValidationExample = () => {
  const {
    setFieldValue,
    validate,
    validateForm,
    state: { errors, example }
  } = useFormContext<FormName, FormState>()

  const handleFieldChange = useCallback(
    (field: FormField) => ({
      target: { value }
    }: ChangeEvent<HTMLInputElement>) => {
      setFieldValue(FormName.Example)(field)(value)
    },
    [setFieldValue]
  )

  const validateField = useCallback(
    (field: FormField) => ({
      target: { value }
    }: ChangeEvent<HTMLInputElement>) => {
      validate(FormName.Example)(field)(value || example[field])
    },
    [validate, example]
  )

  const submit = useCallback(() => {
    if (validateForm(FormName.Example, example)) {
      alert(JSON.stringify(example, null, 2))
    }
  }, [validateForm, example])

  return (
    <div className='form-group'>
      <label>First Name</label>
      <input
        value={example.firstName}
        onChange={handleFieldChange(FormField.FirstName)}
        onBlur={validateField(FormField.FirstName)}
      />
      {!!errors.firstName && <p className='text-danger'>{errors.firstName}</p>}

      <label>Last Name</label>
      <input
        value={example.lastName}
        onChange={handleFieldChange(FormField.LastName)}
        onBlur={validateField(FormField.LastName)}
      />
      {!!errors.lastName && <p className='text-danger'>{errors.lastName}</p>}

      <button onClick={submit}>Submit Form</button>
    </div>
  )
}

export default () => (
  <FormContextProvider<FormName, FormState>
    initialState={{ example: { firstName: '', lastName: '' } }}
    validationSchema={validation}
  >
    <SimpleFormValidationExample />
  </FormContextProvider>
)
```

---

#### Conditional Form validation

```tsx
import React, { useCallback, ChangeEvent } from 'react'
import {
  FormContextProvider,
  ValidationSchema,
  useFormContext
} from 'react-form-fp'

enum FormName {
  Example = 'example'
}
enum FormField {
  FirstName = 'firstName',
  LastName = 'lastName',
  NumberOfChildren = 'numberOfChildren',
  HasKids = 'hasKids'
}

type FormState = {
  firstName: string
  lastName: string
  hasKids: boolean
  numberOfChildren?: number
}

const validation: ValidationSchema<FormName, FormField> = {
  example: {
    firstName: (val: string) =>
      !!val.trim() ? null : 'First name is required',
    lastName: () => null,
    hasKids: () => null,
    numberOfChildren: (val: number, state?: { example: FormState }) => {
      if (state?.example.hasKids) {
        return val > 0 ? null : 'Please specify how many children do you have.'
      }

      return null
    }
  }
}

const ConditionalFormValidationExample = () => {
  const {
    setFieldValue,
    validate,
    validateForm,
    state: { errors, example }
  } = useFormContext<FormName, FormState>()

  const handleFieldChange = useCallback(
    (field: FormField) => ({
      target: { value }
    }: ChangeEvent<HTMLInputElement>) => {
      setFieldValue(FormName.Example)(field)(value)
    },
    [setFieldValue]
  )

  const handleCheckboxChange = useCallback(() => {
    setFieldValue(FormName.Example)(FormField.HasKids)(!example.hasKids)
  }, [setFieldValue, example])

  const validateField = useCallback(
    (field: FormField) => ({
      target: { value }
    }: ChangeEvent<HTMLInputElement>) => {
      validate(FormName.Example)(field)(value || example[field])
    },
    [validate, example]
  )

  const submit = useCallback(() => {
    if (validateForm(FormName.Example, example)) {
      alert(JSON.stringify(example, null, 2))
    }
  }, [validateForm, example])

  return (
    <div className='form-group'>
      <label>First Name</label>
      <input
        value={example.firstName}
        onChange={handleFieldChange(FormField.FirstName)}
        onBlur={validateField(FormField.FirstName)}
      />
      {!!errors.firstName && <p className='text-danger'>{errors.firstName}</p>}

      <label>Last Name</label>
      <input
        value={example.lastName}
        onChange={handleFieldChange(FormField.LastName)}
        onBlur={validateField(FormField.LastName)}
      />
      {!!errors.lastName && <p className='text-danger'>{errors.lastName}</p>}

      <label className='row paper-check'>
        <input
          id='paperSwitch4'
          name='paperSwitch4'
          type='checkbox'
          checked={example.hasKids}
          onChange={handleCheckboxChange}
        />
        <span className='paper-switch-slider'>Do you have kids?</span>
      </label>
      <br />
      {example.hasKids && (
        <>
          <label>Number Of children</label>
          <input
            type='number'
            value={example.numberOfChildren}
            onChange={handleFieldChange(FormField.NumberOfChildren)}
            onBlur={validateField(FormField.NumberOfChildren)}
          />
          {!!errors.numberOfChildren && (
            <p className='text-danger'>{errors.numberOfChildren}</p>
          )}
        </>
      )}
      <button onClick={submit}>Submit Form</button>
    </div>
  )
}

export default () => (
  <FormContextProvider<FormName, FormState>
    initialState={{
      example: {
        firstName: '',
        lastName: '',
        hasKids: false,
        numberOfChildren: 0
      }
    }}
    validationSchema={validation}
  >
    <ConditionalFormValidationExample />
  </FormContextProvider>
)
```

---

#### Adding and removing Validators

```tsx
import React, { useCallback, ChangeEvent, useEffect, useMemo } from 'react'
import {
  FormContextProvider,
  ValidationSchema,
  useFormContext
} from 'react-form-fp'

enum FormName {
  Example = 'example'
}
enum FormField {
  FirstName = 'firstName',
  LastName = 'lastName',
  Married = 'married',
  WifeName = 'wifeName'
}

type FormState = {
  firstName: string
  lastName: string
  married: boolean
  wifeName: string
}

const validation: ValidationSchema<FormName, FormField> = {
  example: {
    firstName: (val: string) =>
      !!val.trim() ? null : 'First name is required',
    lastName: () => null,
    married: () => null,
    wifeName: () => null
  }
}

const DynamicValidators = () => {
  const {
    setFieldValue,
    validate,
    validateForm,
    state: { errors, example },
    setValidator
  } = useFormContext<FormName, FormState>()

  const married = useMemo(() => example.married, [example])

  const handleFieldChange = useCallback(
    (field: FormField) => ({
      target: { value }
    }: ChangeEvent<HTMLInputElement>) => {
      setFieldValue(FormName.Example)(field)(value)
    },
    [setFieldValue]
  )

  const handleCheckboxChange = useCallback(() => {
    setFieldValue(FormName.Example)(FormField.Married)(!example.married)
  }, [setFieldValue, example])

  const validateField = useCallback(
    (field: FormField) => ({
      target: { value }
    }: ChangeEvent<HTMLInputElement>) => {
      validate(FormName.Example)(field)(value || example[field])
    },
    [validate, example]
  )

  const submit = useCallback(() => {
    if (validateForm(FormName.Example, example)) {
      alert(JSON.stringify(example, null, 2))
    }
  }, [validateForm, example])

  useEffect(() => {
    if (married) {
      /*
        THIS IS JUST AN EXAMPLE, IF YOU HAVE A VALIDATOR THAT IS DEPENDANT OF STATE USE CONDITIONAL VALIDATORS
      */
      // Set new validator
      setValidator(FormName.Example, FormField.WifeName, (val: string) => {
        return val?.length > 2 ? null : 'Name must be at least 3 chars long.'
      })
    } else {
      // Clear validator
      setValidator(FormName.Example, FormField.WifeName, () => null)
    }
  }, [married])

  return (
    <div className='form-group'>
      <label>First Name</label>
      <input
        value={example.firstName}
        onChange={handleFieldChange(FormField.FirstName)}
        onBlur={validateField(FormField.FirstName)}
      />
      {!!errors.firstName && <p className='text-danger'>{errors.firstName}</p>}

      <label>Last Name</label>
      <input
        value={example.lastName}
        onChange={handleFieldChange(FormField.LastName)}
        onBlur={validateField(FormField.LastName)}
      />
      {!!errors.lastName && <p className='text-danger'>{errors.lastName}</p>}

      <label className='row paper-check'>
        <input
          id='switch8'
          type='checkbox'
          checked={example.married}
          onChange={handleCheckboxChange}
        />
        <span className='paper-switch-slider'>Are you married?</span>
      </label>
      <br />
      {example.married && (
        <>
          <label>Wife's Name</label>
          <input
            value={example.wifeName}
            onChange={handleFieldChange(FormField.WifeName)}
            onBlur={validateField(FormField.WifeName)}
          />
          {!!errors.wifeName && (
            <p className='text-danger'>{errors.wifeName}</p>
          )}
        </>
      )}
      <button onClick={submit}>Submit Form</button>
    </div>
  )
}

export default () => (
  <FormContextProvider<FormName, FormState>
    initialState={{
      example: {
        firstName: '',
        lastName: '',
        married: false,
        wifeName: undefined
      }
    }}
    validationSchema={validation}
  >
    <DynamicValidators />
  </FormContextProvider>
)
```
