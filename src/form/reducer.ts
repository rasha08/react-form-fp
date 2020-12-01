import {
  CLEAR_FIELD_ERROR,
  FormReducer,
  SET_FILED_ERROR,
  SET_FILED_VALUE
} from './types'

export const formReducer: FormReducer = (state, action) => {
  switch (action.type) {
    case CLEAR_FIELD_ERROR:
      return {
        ...state,
        ...{ errors: { ...state.errors, [action.payload.field]: null } }
      }
    case SET_FILED_ERROR:
      return {
        ...state,
        ...{
          errors: {
            ...state.errors,
            ...{ [action.payload.field]: action.payload.error }
          }
        }
      }
    case SET_FILED_VALUE:
      return {
        ...state,
        ...{
          [action.payload.formName]: {
            ...state[action.payload.formName],
            ...{
              [action.payload.field]: action.payload.value
            }
          }
        }
      }
    default:
      return state
  }
}
