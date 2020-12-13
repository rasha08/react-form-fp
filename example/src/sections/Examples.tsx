import React, { Suspense } from 'react'

import ExampleWrapper from './examples/ExampleWrapper'

// @ts-ignore
import SimpleFormValidation from './examples/simple-form-validation/SimpleFormValidation.md'
import SimpleFormValidationExample from './examples/simple-form-validation/SimpleFormValidation'

// @ts-ignore
import ConditionalFormValidation from './examples/conditional-form-validation/ConditionalFormValidation.md'
import ConditionalFormValidationExample from './examples/conditional-form-validation/ConditionalFormValidationExample'

const Examples = () => {
  return (
    <Suspense fallback={'...'}>
      <h2 id='examples'>Examples</h2>
      <ExampleWrapper
        example={SimpleFormValidationExample}
        doc={SimpleFormValidation}
        title={'Simple Form validation'}
        id='examples-sfv'
      />
      <ExampleWrapper
        example={ConditionalFormValidationExample}
        doc={ConditionalFormValidation}
        title={'Conditional Form validation'}
        id='examples-cfv'
      />
    </Suspense>
  )
}

export default Examples
