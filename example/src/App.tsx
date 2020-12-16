import React from 'react'

import './index.css'
import About from './sections/About'
import SideBar from './sections/Sidebar'
import Header from './sections/Header'
// import Notice from './sections/Notice'
import Installation from './sections/Instalation'
import Usage from './sections/Usage'
import Examples from './sections/Examples'

const App = () => {
  return (
    <div className='container-fluid'>
      <Header />
      {/* <Notice /> */}
      <div className='row flex-center'>
        <SideBar />
        <div className='md-8 offset-1'>
          <div className='paper'>
            <About />
            <div className='section'>
              <Installation />
            </div>
            <div className='section'>
              <Usage />
            </div>
            <div className='section'>
              <Examples />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
