import React from 'react'
import LayoutComponent from '../components/layout'

const ContactPage = () => {
  return (
    <LayoutComponent>
      <h2>Contact me</h2>
      <p>Please, send me and email to
        <a href="mailto:dafegosa19@gmail.com">
          {' '} dafegosa19@gmail.com
        </a>
      </p>
    </LayoutComponent>
  )
}

export default ContactPage