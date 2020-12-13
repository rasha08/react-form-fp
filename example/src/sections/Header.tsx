import React from 'react'

const Header = () => {
  return (
    <nav className='border fixed split-nav'>
      <div className='nav-brand'>
        <h3>
          <a href='/'>React Form FP</a>
        </h3>
      </div>
      <div className='collapsible'>
        <input id='collapsible1' type='checkbox' name='collapsible1' />
        <label htmlFor='collapsible1'>
          <div className='bar1' />
          <div className='bar2' />
          <div className='bar3' />
        </label>
        <div className='collapsible-body'>
          <ul className='inline'>
            <li>
              <a href='/'>About</a>
            </li>
            <li>
              <a href='/'>Documentation</a>
            </li>
            <li>
              <a
                href='https://github.com/rasha08/react-form-fp'
                target='_blank'
                rel='noopener noreferrer'
              >
                Github
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header
