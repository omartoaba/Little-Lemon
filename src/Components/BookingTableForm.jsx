import { FormControl, FormLabel, NumberDecrementStepper, NumberInputField,NumberIncrementStepper,Select,NumberInputStepper,
  NumberInput, Stack, Grid, GridItem, InputGroup, InputLeftAddon, InputLeftElement, Icon, Input, Modal, ModalOverlay,
   ModalContent, ModalHeader, ModalCloseButton, ModalFooter, ModalBody, Button, useToast } from '@chakra-ui/react'
import { Formik,Form,Field } from 'formik'
import React from 'react'
import {BsFillTelephoneFill,BsFillPersonFill,BsFillPeopleFill} from 'react-icons/bs'
import {MdEmail} from "react-icons/md"
function BookingTableForm({isOpen,onClose}) {
  const toast = useToast();
  return (
    <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose} size={'3xl'}>
    <ModalOverlay />
    <ModalContent>
      <ModalHeader>Reserve a Table</ModalHeader>
      <ModalCloseButton/>
      <ModalBody pb={6}>
    <Formik initialValues={{ time: 'Nigeria',guests:1 }}>
        {(props) => (
            <Form >
               <Stack>
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
               </Stack>
                <Field name='time'>
                    {
                        ({field,form}) => (
                            <FormControl isInvalid={form.errors.time && form.touched.time}>
                            <FormLabel>Country</FormLabel>
                            <Select {...field} placeholder='Select country'>
                              <option>United Arab Emirates</option>
                              <option>Nigeria</option>
                            </Select>
                          </FormControl>
                        )
                    }
                </Field>
            </Form>
        )}
    </Formik>
    </ModalBody>
            <ModalFooter>
              <Button colorScheme='yellow' mr={3}  onClick={() => {onClose(); toast({
                title: 'your order is on its way',
                variant: 'left-accent',
                status:'success',
                isClosable: true,
                containerStyle:{
                    marginTop:'80px'
                }
                })}}>
                Reserve now
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
  )
}

export default BookingTableForm