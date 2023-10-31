import { Button, Flex, HStack, Heading, Stack, Wrap, WrapItem,Spacer } from '@chakra-ui/react';
import React from 'react'
import WeekSpecialCard from './WeekSpecialCard';
import { GreekSalad,Brushetta,LemonDessert } from './imagesimports';
const specials = [{
  image:{GreekSalad},
  title:'Greek Salad',
  price:'$12.99',
  description:'The famous greek salad of crispy lettuce,peppers,olives,and our Chicago feta cheese. garnished with crunshy garlic and rosemary croutons.'
},{
  title:'Bruchetta',
  price:'$5.99',
  description:'Our Brushetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.'
},{
  title:'Lemon Dessert',
  price:'$5.00',
  description:'This comes straight froma grandma"s recipe book. evert last ingredient has been sourced and is as authentic as can be imagined.'
}];

function CAT() {
  return (
    <Stack spacing={20}>
    <Flex align={'center'}>
      <Heading>Week Specials</Heading>
      <Spacer />
      <Button colorScheme='yellow' size='lg'>Order Online</Button>
    </Flex>  
    <Wrap align='start' justifyContent={'start'} alignItems={'start'}>{
        specials.map((data,index) => {
          return(
          <WrapItem key={index} justifySelf={'self-start'}>
            <WeekSpecialCard Title={data.title} Price={data.price} Description={data.description} SpecialImage={GreekSalad}/>
          </WrapItem>)
      })
    }
    </Wrap>
    </Stack>
  )
}

export default CAT