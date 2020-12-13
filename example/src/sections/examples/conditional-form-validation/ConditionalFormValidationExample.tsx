import React from 'react'
import { FormContextProvider } from 'react-form-fp'

const ConditionalFormValidationExample = () => {
  return (
    <>
      <h6>ConditionalFormValidationExample</h6>
    </>
  )
}

export default () => (
  <FormContextProvider initialState={{}} validationSchema={{}}>
    <ConditionalFormValidationExample />
  </FormContextProvider>
)
