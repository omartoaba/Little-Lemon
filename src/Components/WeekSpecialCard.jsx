import React from 'react'
import './weekSpecialCard.css'
import { Card,CardBody,Image,Stack,Heading,Text,Divider,CardFooter,Button,ButtonGroup, HStack, Icon } from '@chakra-ui/react'
import { MdOutlineShoppingCart } from "react-icons/md";
function WeekSpecialCard({SpecialImage,Title,Description,Price}) {
  return (
    <Card maxW='sm' background={'#ECEEED'}>
  <CardBody>
    <Image
      src={SpecialImage}
      alt='an image reperesent one of our famous dishes'
      borderRadius='lg' width={400} height={250}
    />
    <Stack mt='6' spacing='3'>
        <HStack justify={'space-between'}>
            <Heading size='md' >
                {Title}
            </Heading>
            <Text color='blue.600' fontSize='2xl'>
                {Price}
            </Text>
        </HStack>
      <Text>
        {Description}
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
      <Button variant='solid' colorScheme='blue' rightIcon={<Icon as={MdOutlineShoppingCart}/>}>
        Order Online
      </Button>
  </CardFooter>
</Card>
  )
}

export default WeekSpecialCard