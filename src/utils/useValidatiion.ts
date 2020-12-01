import { has, curryN, compose } from 'ramda'

export type ValidationSchema<
  FormName extends number | string = string,
  FormField extends number | string = string
> = {
  [key in FormName]: {
    [key in FormField]: (value: any) => string | null
  }
}

export const useValidation = (
  validationSchema: ValidationSchema,
  setError: (field: any, error: string) => void,
  clearError: (field: any) => void
) => {
  const setErrorIfNeeded = curryN(
    2,
    (fieldName: string, error: string | null) => {
      return error ? setError(fieldName, error) : clearError(fieldName)
    }
  )

  const validate = curryN(
    3,
    (formName: string, fieldName: string, value: any): void => {
      if (!has(formName, validationSchema)) {
        return
      }
      if (!has(fieldName, validationSchema[formName])) {
        return
      }

      const validateField = validationSchema[formName][fieldName]

      compose(setErrorIfNeeded(fieldName as any), validateField)(value)
    }
  )

  const validateAll = (
    formName: string | number,
    values: { [key: string]: any }
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

      compose(
        setErrorIfNeeded(fieldName as any),
        addToErrors,
        validationSchema[formName][fieldName]
      )(value)
    })

    return !errors.length
  }

  return { validate, validateAll }
}
