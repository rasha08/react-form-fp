export const SET_FILED_VALUE = 'SET_FILED_VALUE'
export const SET_FILED_ERROR = 'SET_FIELD_ERROR'
export const CLEAR_FIELD_ERROR = 'CLEAR_FIELD_ERROR'

export type FieldName<T> = keyof T
export type FieldValue = any // TODO find alternate solution
export type ErrorState<T> = {
  errors: {
    [key in FieldName<T>]: string | null
  }
}

export type FormContextState<FormName extends number | string, T> = {
  [key in FormName]: T
} &
  ErrorState<T> &
  unknown

export type StateChange<T> = {
  field: FieldName<T>
}

export type SetFieldValueActionPayload<T, FormName> = StateChange<T> & {
  value: FieldValue
  formName: FormName
}

export type SetFieldValueAction<T, FormName> = {
  type: typeof SET_FILED_VALUE
  payload: SetFieldValueActionPayload<T, FormName>
}

export type SetFieldErrorActionPayload<T> = StateChange<T> & {
  error: string
}

export type SetFieldErrorAction<T> = {
  type: typeof SET_FILED_ERROR
  payload: SetFieldErrorActionPayload<T>
}

export type ClearFieldErrorAction<T> = {
  type: typeof CLEAR_FIELD_ERROR
  payload: StateChange<T>
}

export type FormReducer = <FormName extends string | number, T>(
  state: FormContextState<FormName, T>,
  action:
    | SetFieldValueAction<T, FormName>
    | SetFieldErrorAction<T>
    | ClearFieldErrorAction<T>
) => FormContextState<FormName, T>

export type UseFormActions<FormName, T> = {
  setFieldValueAction: (
    formName: FormName,
    field: FieldName<T>,
    value: FieldValue
  ) => void
  setFieldErrorAction: (field: FieldName<T>, error: string) => void
  clearFieldError: (field: FieldName<T>) => void
}

export type FormActionDispatcher<FormName, T> = (
  action:
    | SetFieldValueAction<T, FormName>
    | SetFieldErrorAction<T>
    | ClearFieldErrorAction<T>
) => void
