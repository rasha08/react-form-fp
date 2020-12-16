export const SET_FILED_VALUE = 'SET_FILED_VALUE'
export const SET_FILED_ERROR = 'SET_FIELD_ERROR'
export const CLEAR_FIELD_ERROR = 'CLEAR_FIELD_ERROR'
export const ADD_FIELD = 'ADD_FIELD'
export const REMOVE_FIELD = 'REMOVE_FIELD'

export type FieldName<T> = keyof T
export type FieldValue = any // TODO find alternate solution
export type ErrorState<FormName extends number | string, T> = {
  errors: {
    [key in FormName]: {
      [key in FieldName<T>]: string | null
    }
  }
}

export type FormContextState<FormName extends number | string, T> = {
  [key in FormName]: T
} &
  ErrorState<FormName, T> &
  unknown

export type StateChange<FormName extends number | string, T> = {
  formName: FormName
  field: FieldName<T>
}

export type SetFieldValueActionPayload<
  FormName extends number | string,
  T
> = StateChange<FormName, T> & {
  value: FieldValue
}

export type AddFieldActionPayload<
  FormName extends number | string,
  VT = FieldValue
> = StateChange<FormName, string> & {
  value: VT
}

export type RemoveFieldActionPayload<
  FormName extends number | string
> = StateChange<FormName, string>

export type AddFieldAction<
  FormName extends number | string,
  VT = FieldValue
> = {
  type: typeof ADD_FIELD
  payload: AddFieldActionPayload<FormName, VT>
}

export type RemoveFieldAction<FormName extends number | string> = {
  type: typeof REMOVE_FIELD
  payload: AddFieldActionPayload<FormName>
}

export type SetFieldValueAction<FormName extends number | string, T> = {
  type: typeof SET_FILED_VALUE
  payload: SetFieldValueActionPayload<FormName, T>
}

export type SetFieldErrorActionPayload<
  FormName extends number | string,
  T
> = StateChange<FormName, T> & {
  error: string
}

export type SetFieldErrorAction<FormName extends number | string, T> = {
  type: typeof SET_FILED_ERROR
  payload: SetFieldErrorActionPayload<FormName, T>
}

export type ClearFieldErrorAction<FormName extends number | string, T> = {
  type: typeof CLEAR_FIELD_ERROR
  payload: StateChange<FormName, T>
}

export type FormReducer = <FormName extends string | number, T>(
  state: FormContextState<FormName, T>,
  action:
    | SetFieldValueAction<FormName, T>
    | SetFieldErrorAction<FormName, T>
    | ClearFieldErrorAction<FormName, T>
    | AddFieldAction<FormName>
    | RemoveFieldAction<FormName>
) => FormContextState<FormName, T>

export type UseFormActions<FormName extends string | number, T> = {
  setFieldValueAction: (
    formName: FormName,
    field: FieldName<T>,
    value: FieldValue
  ) => void
  setFieldErrorAction: (
    formName: FormName,
    field: FieldName<T>,
    error: string
  ) => void
  clearFieldError: (formName: FormName, field: FieldName<T>) => void
  addFieldAction: (
    formName: FormName,
    field: string,
    initialValue: FieldValue
  ) => void
  removeFieldAction: (ormName: FormName, field: string) => void
}

export type FormActionDispatcher<FormName extends string | number, T> = (
  action:
    | SetFieldValueAction<FormName, T>
    | SetFieldErrorAction<FormName, T>
    | ClearFieldErrorAction<FormName, T>
    | AddFieldAction<FormName>
    | RemoveFieldAction<FormName>
) => void
