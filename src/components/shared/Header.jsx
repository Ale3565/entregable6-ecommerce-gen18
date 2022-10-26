import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import "./Header.css"
import shop from "../../assets/shop.png"

const Header = () => {
  return (
    <header className='header'>
        <nav className='header__nav'>
          <div className='title'>
            <Link className='header__title' to="/"><img className='header__img' src={shop} alt="" /></Link>
          </div>
            <ul className='header__list'>
            <NavLink className='header__link' to="/login">
              <li className='header__item one'>
              <i className="icon fa-solid fa-user"></i>
                  Login
              </li>
              </NavLink>
              <NavLink className='header__link' to="/purchases">
              <li className='header__item two' >
              <i className="icon fa-solid fa-store"></i>
                  Purchases
              </li>
              </NavLink>
              <NavLink className='header__link' to="/cart">
              <li className='header__item three' >
              <i className="icon fa-solid fa-cart-shopping"></i>
                  Cart
              </li>
              </NavLink>
            </ul>
        </nav>
    </header>



  )
}

export default Header