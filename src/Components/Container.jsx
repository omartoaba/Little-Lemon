import React from 'react'
import Nav from './Nav'
import { Stack,Box } from '@chakra-ui/react'
import Footer from './Footer'

function Container(props) {
  return (
     <Stack spacing={5} mt={5}>
     <Nav/>
     <Box mt={10}>
        {props.children}
     </Box>
     <Footer/>
     </Stack>
  )
}

export default Container