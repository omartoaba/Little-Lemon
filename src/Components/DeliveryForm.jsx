import { Modal, ModalOverlay,ModalContent,ModalHeader,ModalCloseButton,ModalBody,ModalFooter,Button, Stack,Image,Text,
   NumberInput, NumberInputField, NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper, FormControl, FormLabel, Input, Divider, useToast} from '@chakra-ui/react'
import { Formik,Form } from 'formik'
import React from 'react'


function DeliveryForm({dish,isOpen,onClose}) {
 const toast = useToast();
    return (
      <>
        <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>{dish.Title}</ModalHeader>
            <ModalCloseButton/>
            <ModalBody pb={6}>
            <Stack spacing={3} >
              <Image src={dish.SpecialImage} height={250} width={'100%'} borderRadius={10}/>
              <Text fontSize={14}>{dish.Description}</Text>
              <Formik>
                <Form>
                  <FormControl>
                    <FormLabel>Quantity</FormLabel>
                    <NumberInput max={20} min={1} defaultValue={1} _readOnly={true}>
                      <NumberInputField />
                       <NumberInputStepper>
                        <NumberIncrementStepper />
                        <NumberDecrementStepper />
                      </NumberInputStepper>
                   </NumberInput>
                  </FormControl>
                  <FormControl mt={5}>
                    <FormLabel>Address</FormLabel>
                    <Input></Input>
                  </FormControl>
                </Form>
              </Formik>
            </Stack>
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
                Order now
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
}

export default DeliveryForm