import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

const FooterComponent = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `);
  return (
    <footer className='footer'>
      <p>Created by {data.site.siteMetadata.author}, &copy; 2022</p>
    </footer>
  )
}

export default FooterComponent