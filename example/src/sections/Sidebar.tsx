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
        </h4>
        <h4>
          <a href='#examples'>Examples</a>
        </h4>
        <h5>
          <a href='#examples-sfv'>Simple Form Validation</a>
        </h5>
      </div>
    </div>
  )
}

export default SideBar
