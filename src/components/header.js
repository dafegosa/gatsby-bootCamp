import React from 'react'
import { Link } from 'gatsby';

const HeaderComponent = () => {
  return (
    <header className='header'>
      <h1 className='mx-auto'>Daniel Fernando Gómez Salazar, Dafegosa</h1>
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