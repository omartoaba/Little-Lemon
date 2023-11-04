import { FormControl, FormLabel, NumberDecrementStepper, NumberInputField,NumberIncrementStepper,Select,NumberInputStepper,NumberInput } from '@chakra-ui/react'
import { Formik,Form,Field } from 'formik'
import React from 'react'

function BookingTableForm() {
  return (
    <Formik initialValues={{ time: 'Nigeria',guests:1 }}>
        {(props) => (
            <Form >
                <Field name='guests'>
                  {({form}) => (
                    <FormControl isInvalid={form.errors.guests && form.touched.guests}>
                        <FormLabel>Guestes</FormLabel>
                        <NumberInput max={20} min={1}>
                            <NumberInputField />
                                <NumberInputStepper>
                                    <NumberIncrementStepper />
                                    <NumberDecrementStepper />
                                </NumberInputStepper>
                        </NumberInput>
                    </FormControl>
                    )}
                </Field>
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
  )
}

export default BookingTableForm