import React, { lazy, Suspense } from 'react'

import ExampleWrapper from './examples/ExampleWrapper'
// @ts-ignore
import { importMDX } from 'mdx.macro'

import SimpleFormValidationExample from './examples/simple-form-validation/SimpleFormValidation'
import ConditionalFormValidationExample from './examples/conditional-form-validation/ConditionalFormValidationExample'
import DynamicValidatorsExample from './examples/dynamic-validators/DynamicValidatorsExample'

const Examples = () => {
  const SimpleFormValidation = lazy(() =>
    importMDX('./examples/simple-form-validation/SimpleFormValidation.mdx')
  )
  const ConditionalFormValidation = lazy(() =>
    importMDX(
      './examples/conditional-form-validation/ConditionalFormValidation.mdx'
    )
  )

  const DynamicValidators = lazy(() =>
    importMDX('./examples/dynamic-validators/DynamicValidators.mdx')
  )

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
      <ExampleWrapper
        example={DynamicValidatorsExample}
        doc={DynamicValidators}
        title={'Adding and removing Validators'}
        id='examples-dv'
      />
    </Suspense>
  )
}

export default Examples
