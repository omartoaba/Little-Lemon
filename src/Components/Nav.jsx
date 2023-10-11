import React from 'react'

function Nav() {
  return (
    <nav className='mainnavbar'>
      <ul className='navbar_links'>
        <li className='navbar_link'><a>Home</a></li>
        <li className='navbar_link'><a>About</a></li>
        <li className='navbar_link'><a>Manu</a></li>
        <li className='navbar_link'><a>Reservations</a></li>
        <li className='navbar_link'><a>Order Online</a></li>
        <li className='navbar_link'><a>Login</a></li>
      </ul>
    </nav>
  )
}

export default Nav