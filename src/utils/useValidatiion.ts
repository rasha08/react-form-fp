import { has, curryN } from 'ramda'

export type Validator<VT = any, ST = any> = (
  value: VT,
  state?: ST
) => string | null

export type ValidationSchema<
  FormName extends number | string = string,
  FormField extends number | string = string
> = {
  [key in FormName]: {
    [key in FormField]: Validator
  }
}

export const useValidation = (
  validationSchema: ValidationSchema,
  setError: (formName: any, field: any, error: string) => void,
  clearError: (formName: any, field: any) => void
) => {
  const setErrorIfNeeded = (
    formName: string | number,
    fieldName: string,
    error: string | null
  ) => {
    return error
      ? setError(formName, fieldName, error)
      : clearError(formName, fieldName)
  }

  const validate = curryN(
    4,
    (
      formName: string | any,
      fieldName: string | any,
      value: any,
      state?: any
    ): void => {
      if (!has(formName, validationSchema)) {
        return
      }
      if (!has(fieldName, validationSchema[formName])) {
        return
      }

      const validateField = validationSchema[formName][fieldName]

      setErrorIfNeeded(formName, fieldName as any, validateField(value, state))
    }
  )

  const validateAll = (
    formName: string | number,
    values: { [key: string]: any },
    state?: any
  ): boolean => {
    const errors: boolean[] = []

    const addToErrors = (error: string | null) => {
      if (error) {
        errors.push(!!errors)
      }

      return error
    }

    Object.entries(values).forEach(([fieldName, value]) => {
      if (!has(formName as string, validationSchema)) {
        return
      }
      if (!has(fieldName, validationSchema[formName])) {
        return
      }

      setErrorIfNeeded(
        formName,
        fieldName,
        addToErrors(validationSchema[formName][fieldName](value, state))
      )
    })

    return !errors.length
  }

  return { validate, validateAll }
}
