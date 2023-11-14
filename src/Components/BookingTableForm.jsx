import { FormControl, FormLabel, NumberDecrementStepper, NumberInputField,NumberIncrementStepper,Select,NumberInputStepper,
  NumberInput, Stack, Grid, GridItem, InputGroup, InputLeftAddon, InputLeftElement, Icon, Input, Modal, ModalOverlay,
   ModalContent, ModalHeader, ModalCloseButton, ModalFooter, ModalBody, Button, useToast, Text, HStack, Spacer, Box, Flex } from '@chakra-ui/react'
import { Formik,Form,Field } from 'formik'
import React, { useState } from 'react'
import {BsFillTelephoneFill,BsFillPersonFill,BsFillPeopleFill} from 'react-icons/bs'
import {MdEmail} from "react-icons/md"
function BookingTableForm({isOpen,onClose}) {
  const toast = useToast();
  const [tableSelection,setTableSelection] = useState(true);
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
                    <Flex width={'100%'}>
                      <Input type='datetime-local'/>
                      <Spacer/>
                      <InputGroup>
                        <NumberInput max={10} min={2} step={2} defaultValue={2}>
                        <InputLeftElement pointerEvents='none'>
                        <Icon as={BsFillPeopleFill} color='gray.100' />
                      </InputLeftElement>
                            <NumberInputField pl={10} readOnly={true}/>
                                <NumberInputStepper>
                                    <NumberIncrementStepper />
                                    <NumberDecrementStepper />
                                </NumberInputStepper>
                        </NumberInput>
                        </InputGroup>
                    </Flex>
                    <Box bg={'gray.400'} borderRadius={10} width={'100%'} height={250}>
                      
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