import {
  ADD_FIELD,
  CLEAR_FIELD_ERROR,
  FieldName,
  FieldValue,
  FormActionDispatcher,
  FormContextState,
  SET_FILED_ERROR,
  SET_FILED_VALUE,
  UseFormActions
} from './types'

export const useFormActions = <FormName extends string | number, T>(
  state: FormContextState<FormName, T>,
  dispatch: FormActionDispatcher<FormName, T>
): UseFormActions<FormName, T> => {
  const setFieldValueAction = (
    formName: FormName,
    field: FieldName<T>,
    value: FieldValue
  ): void => {
    dispatch({
      type: SET_FILED_VALUE,
      payload: {
        formName,
        field,
        value
      }
    })
  }

  const setFieldErrorAction = (
    formName: FormName,
    field: FieldName<T>,
    error: string
  ): void => {
    dispatch({
      type: SET_FILED_ERROR,
      payload: {
        formName,
        field,
        error
      }
    })
  }

  const clearFieldError = (formName: FormName, field: FieldName<T>): void => {
    if (!state.errors[formName] || !state.errors[formName][field]) {
      return
    }

    dispatch({
      type: CLEAR_FIELD_ERROR,
      payload: {
        formName,
        field
      }
    })
  }

  const addFieldAction = (
    formName: FormName,
    field: string,
    value: FieldValue
  ): void => {
    dispatch({
      type: ADD_FIELD,
      payload: {
        formName,
        field,
        value
      }
    } as any)
  }

  const removeFieldAction = (formName: FormName, field: string): void => {
    dispatch({
      type: ADD_FIELD,
      payload: {
        formName,
        field
      }
    } as any)
  }

  return {
    setFieldValueAction,
    setFieldErrorAction,
    clearFieldError,
    addFieldAction,
    removeFieldAction
  }
}
