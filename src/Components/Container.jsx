import React from 'react'
import Nav from './Nav'

function Container(props) {
  return (
     <>
     <Nav/>
     <div className="container">
        {props.children}
     </div>
     </>
  )
}

export default Container