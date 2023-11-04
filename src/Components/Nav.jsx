import React from 'react'
import Logo from '../assets/Logo.svg'
import './Nav.css'
function Nav() {
  return (
    <nav className='mainnavbar'>
      <img src={Logo}/>
      <ul className='navbar_links'>
        <li className='navbar_link'><a href='/'>Home</a></li>
        <li className='navbar_link'><a href='#about'>About</a></li>
        <li className='navbar_link'><a href='menu'>Menu</a></li>
        <li className='navbar_link'><a href='reservations'>Reservations</a></li>
        <li className='navbar_link'><a href='orderonline'>Order Online</a></li>
        <li className='navbar_link'><a href='login'>Login</a></li>
      </ul>
    </nav>
  )
}

export default Nav