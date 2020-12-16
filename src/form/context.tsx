import React, {
  ComponentProps,
  createContext,
  FC,
  useContext,
  useReducer,
  useState
} from 'react'
import {
  FieldName,
  FieldValue,
  FormActionDispatcher,
  FormContextState
} from './types'
import { formReducer } from './reducer'
import { useFormActions } from './actions'
import {
  useValidation,
  ValidationSchema,
  Validator
} from '../utils/useValidatiion'

type SetValidator<FormName extends string | number, T, ValueType = any> = (
  formName: FormName,
  field: keyof T,
  validator: Validator<ValueType>
) => void
type Validate<FormName extends string | number, T> = (
  formName: FormName
) => (fieldName: FieldName<T>) => (value: FieldValue) => void
type SetFieldValue<FormName extends string | number, T> = (
  formName: FormName
) => (field: FieldName<T>) => (value: FieldValue) => void
type ValidateForm<FormName extends string | number, T> = (
  formName: FormName,
  values: T
) => boolean
type AddField<FormName extends string | number, ValueType = FieldValue> = (
  formName: FormName,
  field: string,
  value: FieldValue,
  validator?: Validator<ValueType>
) => void
type RemoveField<FormName extends string | number> = (
  formName: FormName,
  field: string
) => void

type UseFormContext<FormName extends string | number, T> = {
  state: FormContextState<FormName, T>
  validate: Validate<FormName, T>
  setFieldValue: SetFieldValue<FormName, T>
  validateForm: ValidateForm<FormName, T>
  setValidator: SetValidator<FormName, T>
  addField: AddField<FormName>
  removeField: RemoveField<FormName>
}

const FormContext = createContext({} as any)
export const useFormContext = <FormName extends string | number, T>() =>
  useContext<UseFormContext<FormName, T>>(FormContext)

interface Props<FormName extends string | number, T>
  extends ComponentProps<FC> {
  initialState: { [key in FormName]: T } | unknown
  validationSchema: ValidationSchema
}

type Form = <FormName extends string | number, T>(
  props: Props<FormName, T>
) => JSX.Element

export const FormContextProvider: Form = <FormName extends string | number, T>({
  initialState,
  validationSchema: vs,
  children
}) => {
  const [state, dispatch] = useReducer(formReducer, {
    ...initialState,
    errors: Object.fromEntries(Object.keys(initialState).map((k) => [k, {}]))
  })

  const [validationSchema, setValidationSchema] = useState(vs)

  const {
    setFieldErrorAction,
    clearFieldError,
    setFieldValueAction,
    addFieldAction,
    removeFieldAction
  } = useFormActions<FormName, T>(
    (state as unknown) as FormContextState<FormName, T>,
    dispatch as FormActionDispatcher<FormName, T>
  )

  const { validate: validateField, validateAll } = useValidation(
    validationSchema,
    setFieldErrorAction,
    clearFieldError
  )

  const validateForm: ValidateForm<FormName, T> = (formName, values) => {
    return validateAll(formName, values, state)
  }

  const setFieldValue: SetFieldValue<FormName, T> = (formName) => (
    fieldName
  ) => (value) => {
    if (state.errors[formName][fieldName as any]) {
      validate(formName)(fieldName)(value)
    }

    setFieldValueAction(formName, fieldName, value)
  }

  const setValidator: SetValidator<FormName, T> = (
    formName,
    field,
    validator
  ) => {
    setValidationSchema((previousSchema) => ({
      ...previousSchema,
      [formName]: {
        ...previousSchema[formName],
        [field]: validator
      }
    }))
  }

  const validate: Validate<FormName, T> = (formName) => (formField) => (
    value: FieldValue
  ) => validateField(formName, formField, value, state)

  const addField: AddField<FormName> = (
    formName,
    field,
    value,
    validator = (_) => null
  ) => {
    addFieldAction(formName, field, value)
    setValidator(formName, (field as unknown) as keyof T, validator)
  }

  const removeField: RemoveField<FormName> = (formName, field) => {
    removeFieldAction(formName, field)
    setValidator(formName, (field as unknown) as keyof T, () => null)
  }

  return (
    <FormContext.Provider
      value={{
        setFieldValue,
        validate,
        state,
        validateForm,
        setValidator,
        addField,
        removeField
      }}
    >
      {children}
    </FormContext.Provider>
  )
}
