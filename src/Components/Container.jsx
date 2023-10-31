import React from 'react'
import Nav from './Nav'
import { Stack } from '@chakra-ui/react'
import Footer from './Footer'

function Container(props) {
  return (
     <Stack spacing={5}>
     <Nav/>
     <div className="container">
        {props.children}
     </div>
     <Footer/>
     </Stack>
  )
}

export default Container