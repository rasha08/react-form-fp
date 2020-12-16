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
    state,
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
    <>
      <div className='form-group col-6'>
        <label>First Name</label>
        <input
          value={example.firstName}
          onChange={handleFieldChange(FormField.FirstName)}
          onBlur={validateField(FormField.FirstName)}
        />
        {!!errors.example.firstName && (
          <p className='text-danger'>{errors.example.firstName}</p>
        )}

        <label>Last Name</label>
        <input
          value={example.lastName}
          onChange={handleFieldChange(FormField.LastName)}
          onBlur={validateField(FormField.LastName)}
        />
        {!!errors.example.lastName && (
          <p className='text-danger'>{errors.example.lastName}</p>
        )}

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
            {!!errors.example.numberOfChildren && (
              <p className='text-danger'>{errors.example.numberOfChildren}</p>
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
        hasKids: false,
        numberOfChildren: undefined
      }
    }}
    validationSchema={validation}
  >
    <ConditionalFormValidationExample />
  </FormContextProvider>
)
