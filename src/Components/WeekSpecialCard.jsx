import React from 'react'
import './weekSpecialCard.css'
import { Card,CardBody,Image,Stack,Heading,Text,Divider,CardFooter,Button, HStack, Icon,Tooltip,ButtonGroup } from '@chakra-ui/react'
import { MdDeliveryDining } from "react-icons/md";
import * as actions from '../actions/cartActions';
import { connect } from 'react-redux';

function WeekSpecialCard({SpecialImage,Title,Description,Price,...props}) {
  const addToCart =() => {
    props.addProduct({title:Title,price:Price})
  }
  return (
    <Card maxW='sm' background={'#ECEEED'} shadow={'md'}>
  <CardBody>
    <Image
      src={SpecialImage}
      alt='an image reperesent one of our famous dishes'
      borderRadius='lg' width={400} height={250}
    />
    <Stack mt='6' spacing='3'>
        <HStack justify={'space-between'} align={'center'}>
            <Heading size='md'>
                {Title}
            </Heading>
            <Text color='orange.600' fontSize='xl'>
                ${Price}
            </Text>
        </HStack>
        <Tooltip hasArrow label={Description}>
             <Text fontSize={16} noOfLines={3}>
                {Description}
            </Text>
        </Tooltip>
        <Divider/>
    </Stack>
  </CardBody>
  <CardFooter>
      <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='yellow' rightIcon={<Icon as={MdDeliveryDining}/>} justifyContent={'center'}>
        Order a delivery
      </Button>
      <Button variant='ghost' colorScheme='yellow' onClick={addToCart}>
        Add to cart
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>
  )
}
const mapActionsToProps = {
  addProduct : actions.addProduct
}
export default connect(null,mapActionsToProps)(WeekSpecialCard);