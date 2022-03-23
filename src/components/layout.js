import React from 'react'
import FooterComponent from './footer'
import HeaderComponent from './header'
import '../styles/index.scss'

const LayoutComponent = ({ children }) => {
  return (
    <div className='layout'>
      <HeaderComponent />
      <hr />
      <div className='layout__container-content'>
        {children}
      </div>
      <FooterComponent />
    </div>
  )
}

export default LayoutComponent