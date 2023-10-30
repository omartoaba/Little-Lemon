import React from 'react'
import Nav from './Nav'
import { Stack } from '@chakra-ui/react'

function Container(props) {
  return (
     <Stack spacing={5} mt={5} mr={8} ml={8}>
     <Nav/>
     <div className="container">
        {props.children}
     </div>
     </Stack>
  )
}

export default Container