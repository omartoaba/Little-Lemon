import React from 'react'
import { FormControl, FormLabel, Grid, GridItem, Icon, Input, InputGroup, InputLeftElement, NumberDecrementStepper, 
         NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper } from '@chakra-ui/react'
import { Field } from 'formik'
import {BsFillTelephoneFill,BsFillPersonFill,BsFillPeopleFill} from 'react-icons/bs'
import {MdEmail} from "react-icons/md"

function BookingTableInfoForm() {
  return (
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
  )
}

export default BookingTableInfoForm