import React from 'react'
import HeroSection from './HeroSection.jsx'
import CAT from './CAT.jsx'
import { Stack } from '@chakra-ui/react'
function Home() {
  return (
    <Stack spacing={120} justify={"center"} align={'center'}>
        <HeroSection/>
        <CAT/>
    </Stack>
  )
}

export default Home