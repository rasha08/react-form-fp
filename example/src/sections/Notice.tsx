import React from 'react'

const Notice = () => {
  return (
    <div className='row flex-center beta-warn'>
      <div className='md-6'>
        <input className='alert-state' id='alert-4' type='checkbox' />
        <div className='alert alert-warning dismissible'>
          React Form FP library is still in beta version
          <label className='btn-close' htmlFor='alert-4'>
            X
          </label>
        </div>
      </div>
    </div>
  )
}

export default Notice
