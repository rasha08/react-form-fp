import React from 'react'

const SideBar = () => {
  return (
    <div className='md-3 sidebar'>
      <div className='paper'>
        <h4>
          <a href='#about'>About</a>
        </h4>
        <h4>
          <a href='#installation'>Installation</a>
        </h4>
        <h4>
          <a href='#usage'>Usage</a>
          <small>
            <a href='#form-state'>Form State</a>
          </small>
          <small>
            <a href='#handle-change'>Handling updates</a>
          </small>
          <small>
            <a href='#reading-errors'>Showing Errors</a>
          </small>
          <small>
            <a href='#validation-schema'>Validation Schema</a>
          </small>
          <small>
            <a href='#single-field-validator'>Single Field Validator</a>
          </small>
          <small>
            <a href='#validate-form'>Validate Entire Form</a>
          </small>
          <small>
            <a href='#set-field-validator'>Set Field Validator</a>
          </small>
        </h4>
        <h4>
          <a href='#examples'>Examples</a>
          <small>
            <a href='#examples-sfv'>Simple Form Validation</a>
          </small>
          <small>
            <a href='#examples-cfv'>Conditional Form Validation</a>
          </small>
          <small>
            <a href='#examples-dv'>Adding and removing validators</a>
          </small>
        </h4>
      </div>
    </div>
  )
}

export default SideBar
