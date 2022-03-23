import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby';

const HeaderComponent = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  return (
    <header className='header'>
      <h1 className='mx-auto'>{data.site.siteMetadata.title}</h1>
      <nav>
        <ul>
          <li>
            <Link to="/" className='header__link' activeClassName='header__link-active'>
              Home
            </Link>
          </li>
          <li>
          <Link to="/about" className='header__link' activeClassName='header__link-active'>
            About
          </Link>
          </li>
          <li>
            <Link to="/blog" className='header__link' activeClassName='header__link-active'>
              Blog
            </Link>
          </li>
          <li>
            <Link to="/contact" className='header__link' activeClassName='header__link-active'>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default HeaderComponent