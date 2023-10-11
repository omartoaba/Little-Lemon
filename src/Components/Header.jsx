import React from 'react'
import Nav from './Nav'

function Header() {
  return (
    <header>
        <div className="mainheader">
            <img className='logo'></img>
            <Nav/>
        </div>
    </header>
  )
}

export default Header