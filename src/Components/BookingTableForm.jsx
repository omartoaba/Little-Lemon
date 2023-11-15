import { FormControl, FormLabel, NumberDecrementStepper, NumberInputField,NumberIncrementStepper,Select,NumberInputStepper,
  NumberInput, Stack, Grid, GridItem, InputGroup, InputLeftAddon, InputLeftElement, Icon, Input, Modal, ModalOverlay,
   ModalContent, ModalHeader, ModalCloseButton, ModalFooter, ModalBody, Button, useToast, Text, HStack, Spacer, Box, Flex, Wrap, Image, WrapItem } from '@chakra-ui/react'
import { Formik,Form,Field } from 'formik'
import React, { useEffect, useState } from 'react'
import {BsFillTelephoneFill,BsFillPersonFill,BsFillPeopleFill} from 'react-icons/bs'
import {MdEmail} from "react-icons/md"
import {getRandomTableDate,getWorkTimes} from '../assets/tablesdata'

const workHours = getWorkTimes('10:00 am','10:00 pm');
let tablesData = null;
function BookingTableForm({isOpen,onClose}) {
  const toast = useToast();
  const [guestsNumber,setGuestesNumber] = useState(2);
  const [tableSelection,setTableSelection] = useState(true);
  const [selectedTime,setSelectedTime] = useState();
  useEffect(() => {
     tablesData = getRandomTableDate();
  },[selectedTime])
  return (
    <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose} size={'4xl'}>
    <ModalOverlay />
    <ModalContent>
      <ModalHeader>Reserve a Table</ModalHeader>
      <ModalCloseButton/>
      <ModalBody pb={6}>
    <Formik initialValues={{ time: 'Nigeria',guests:1 }}>
        {(props) => (
            <Form >
               <Stack>
                {tableSelection ?
                <Grid templateRows={'repeat(4,1fr)'} templateColumns={'repeat(2,1fr)'} gap={5}>
                  <GridItem>
                    <FormControl>
                      <FormLabel>Name</FormLabel>
                      <InputGroup>
                        <InputLeftElement pointerEvents='none'>
                           <Icon as={BsFillPersonFill} color='gray.300' />
                        </InputLeftElement>
                        <Input type='text'/>
                      </InputGroup>
                    </FormControl>
                  </GridItem>
                  <GridItem>
                    <FormControl>
                      <FormLabel>Phone Number</FormLabel>
                      <InputGroup>
                      <InputLeftElement pointerEvents='none'>
                        <Icon as={BsFillTelephoneFill} color='gray.300' />
                      </InputLeftElement>
                        <Input type='number'/>
                      </InputGroup>
                    </FormControl>
                  </GridItem>
                  <GridItem>
                    <FormControl>
                      <FormLabel>Date</FormLabel>
                      <Input type='datetime-local'/>
                    </FormControl>
                  </GridItem>
                  <GridItem>
                    <FormControl>
                      <FormLabel>Email</FormLabel>
                      <InputGroup>
                      <InputLeftElement pointerEvents='none'>
                        <Icon as={MdEmail} color='gray.300' />
                      </InputLeftElement>
                        <Input type='email'/>
                      </InputGroup>
                    </FormControl>
                  </GridItem>
                  <GridItem gridColumn={1}>
                  <Field name='guests'>
                  {({form}) => (
                    <FormControl isInvalid={form.errors.guests && form.touched.guests}>
                        <FormLabel>Guestes</FormLabel>
                        <InputGroup>
                        <NumberInput max={20} min={1}>
                        <InputLeftElement pointerEvents='none'>
                        <Icon as={BsFillPeopleFill} color='gray.300' />
                      </InputLeftElement>
                            <NumberInputField pl={10} readOnly={true}/>
                                <NumberInputStepper>
                                    <NumberIncrementStepper />
                                    <NumberDecrementStepper />
                                </NumberInputStepper>
                        </NumberInput>
                        </InputGroup>
                    </FormControl>
                    )}
                </Field>
                  </GridItem>
                </Grid>
                : <Stack spacing={5}>
                    <HStack width={'100%'} spacing={8} justify={'space-between'}>
                      <Input type='date'/>
                      <Select value={selectedTime} placeholder='Select Time' onChange={(e) => setSelectedTime(e.target.value)}>
                        {workHours.map((hour,index) => {
                            return  <option key={index} value={hour}>{hour}</option>
                        })}
                      </Select>
                      <InputGroup>
                        <NumberInput value={guestsNumber} max={10} min={2} step={2} defaultValue={2} onChange={(e) => setGuestesNumber(e)}>
                        <InputLeftElement pointerEvents='none'>
                        <Icon as={BsFillPeopleFill} color='gray.100' />
                      </InputLeftElement>
                            <NumberInputField value={guestsNumber} pl={10} readOnly={true} />
                                <NumberInputStepper>
                                    <NumberIncrementStepper />
                                    <NumberDecrementStepper />
                                </NumberInputStepper>
                        </NumberInput>
                        </InputGroup>
                    </HStack>
                    <Box padding={3} bg={'#DEDEDE'} borderRadius={10} width={'100%'} minHeight={250}>
                      <Wrap justify={'center'} spacing={3}>
                        {
                        tablesData.get(`${guestsNumber}`).map((data,index) => {
                          return (<WrapItem key={index} cursor={'pointer'} _hover={{opacity: 1.0}} opacity={0.6}>
                                  <Image src={data} width={40} height={'auto'} />
                                 </WrapItem>)
                        })}
                      </Wrap>
                    </Box>
                  </Stack>}
               </Stack>
            </Form>
        )}
    </Formik>
    </ModalBody>
            <ModalFooter>
              <Button colorScheme='yellow' mr={3}  onClick={() =>setTableSelection(false)}>
                Reserve now
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
  )
}

export default BookingTableForm