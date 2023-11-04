import React from 'react'
import './weekSpecialCard.css'
import { Card,CardBody,Image,Stack,Heading,Text,Divider,CardFooter,Button, HStack, Icon,Tooltip } from '@chakra-ui/react'
import { MdDeliveryDining } from "react-icons/md";
function WeekSpecialCard({SpecialImage,Title,Description,Price}) {
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
                {Price}
            </Text>
        </HStack>
        <Tooltip hasArrow label={Description}>
             <Text fontSize={16} noOfLines={3}>
                {Description}
            </Text>
        </Tooltip>
    </Stack>
  </CardBody>
  <CardFooter>
      <Button variant='ghost' colorScheme='gray' rightIcon={<Icon as={MdDeliveryDining}/>} alignItems={'center'}>
        Order a delivery
      </Button>
  </CardFooter>
</Card>
  )
}

export default WeekSpecialCard