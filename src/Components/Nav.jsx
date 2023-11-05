import React from 'react'
import Logo from '../assets/Logo.svg'
import './Nav.css'
import { HStack } from '@chakra-ui/react'
function Nav() {
  return (
    <nav>
      <HStack>
      <img src={Logo}/>
      <ul className='navbar_links'>
        <li className='navbar_link'><a href='/'>Home</a></li>
        <li className='navbar_link'><a href='#about'>About</a></li>
        <li className='navbar_link'><a href='menu'>Menu</a></li>
        <li className='navbar_link'><a href='reservations'>Reservations</a></li>
        <li className='navbar_link'><a href='orderonline'>Order Online</a></li>
      </ul>
      </HStack>
    </nav>
  )
}

export default Nav