import React, {
  ComponentProps,
  createContext,
  FC,
  useContext,
  useReducer
} from 'react'
import {
  FieldName,
  FieldValue,
  FormActionDispatcher,
  FormContextState
} from './types'
import { formReducer } from './reducer'
import { useFormActions } from './actions'
import { omit } from 'ramda'
import { useValidation, ValidationSchema } from '../utils/useValidatiion'

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

type UseFormContext<FormName extends string | number, T> = {
  state: FormContextState<FormName, T>
  validate: Validate<FormName, T>
  setFieldValue: SetFieldValue<FormName, T>
  validateForm: ValidateForm<FormName, T>
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
  validationSchema,
  children
}) => {
  const [state, dispatch] = useReducer(formReducer, {
    ...omit(initialState, '__typename'),
    ...{ errors: {} }
  })

  const {
    setFieldErrorAction,
    clearFieldError,
    setFieldValueAction
  } = useFormActions<FormName, T>(
    state as FormContextState<FormName, T>,
    dispatch as FormActionDispatcher<FormName, T>
  )

  const { validate, validateAll } = useValidation(
    validationSchema,
    setFieldErrorAction,
    clearFieldError
  )

  const validateForm: ValidateForm<FormName, T> = (formName, values) => {
    return validateAll(formName, values)
  }

  const setFieldValue: SetFieldValue<FormName, T> = (formName) => (
    fieldName
  ) => (value) => {
    if ((state as FormContextState<FormName, T>).errors[fieldName]) {
      // @ts-ignore
      validate(formName)(fieldName)(value)
    }

    setFieldValueAction(formName, fieldName, value)
  }

  return (
    <FormContext.Provider
      value={{ setFieldValue, validate, state, validateForm }}
    >
      {children}
    </FormContext.Provider>
  )
}
