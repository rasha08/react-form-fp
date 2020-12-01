import {
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

  const setFieldErrorAction = (field: FieldName<T>, error: string): void => {
    dispatch({
      type: SET_FILED_ERROR,
      payload: {
        field,
        error
      }
    })
  }

  const clearFieldError = (field: FieldName<T>): void => {
    if (!state.errors[field]) {
      return
    }

    dispatch({
      type: CLEAR_FIELD_ERROR,
      payload: {
        field
      }
    })
  }

  return { setFieldValueAction, setFieldErrorAction, clearFieldError }
}
