import React from 'react'
import Logo from '../assets/Logo.svg'
import './Nav.css'
import { HStack } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
function Nav() {
  return (
    <nav>
      <HStack>
      <img src={Logo}/>
      <ul className='navbar_links'>
        <li className='navbar_link'><Link to='/'>Home</Link></li>
        <li className='navbar_link'><a href='#about'>About</a></li>
        <li className='navbar_link'><Link to='menu'>Menu</Link></li>
        <li className='navbar_link'><Link to='reservations'>Reservations</Link></li>
        <li className='navbar_link'><Link to='orderonline'>Order Online</Link></li>
      </ul>
      </HStack>
    </nav>
  )
}

export default Nav