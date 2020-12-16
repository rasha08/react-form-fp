import { omit } from 'ramda'
import {
  ADD_FIELD,
  CLEAR_FIELD_ERROR,
  FormReducer,
  REMOVE_FIELD,
  SET_FILED_ERROR,
  SET_FILED_VALUE
} from './types'

export const formReducer: FormReducer = (state, action) => {
  switch (action.type) {
    case CLEAR_FIELD_ERROR:
      return {
        ...state,
        errors: {
          ...state.errors,
          [action.payload.formName]: {
            ...state.errors[action.payload.formName],
            [action.payload.field]: null
          }
        }
      }
    case SET_FILED_ERROR:
      console.log(action)
      return {
        ...state,
        errors: {
          ...state.errors,
          [action.payload.formName]: {
            ...state.errors[action.payload.formName],
            [action.payload.field]: action.payload.error
          }
        }
      }
    case SET_FILED_VALUE:
      return {
        ...state,
        [action.payload.formName]: {
          ...state[action.payload.formName],
          ...{
            [action.payload.field]: action.payload.value
          }
        }
      }
    case ADD_FIELD:
      return {
        ...state,
        [action.payload.formName]: {
          ...state[action.payload.formName],
          ...{
            [action.payload.field]: action.payload.value
          }
        }
      }
    case REMOVE_FIELD:
      return {
        ...state,
        [action.payload.formName]: omit(
          [action.payload.field as string],
          state[action.payload.formName]
        )
      }
    default:
      return state
  }
}
