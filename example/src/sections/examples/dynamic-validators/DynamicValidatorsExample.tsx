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
    state,
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
    <>
      <div className='form-group col-6'>
        <label>First Name</label>
        <input
          value={example.firstName}
          onChange={handleFieldChange(FormField.FirstName)}
          onBlur={validateField(FormField.FirstName)}
        />
        {!!errors.firstName && (
          <p className='text-danger'>{errors.firstName}</p>
        )}

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
      <div className='col-6'>
        <b>Form ContextState</b>
        <pre>
          <code>{JSON.stringify(state, null, 2)}</code>
        </pre>
      </div>
    </>
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
