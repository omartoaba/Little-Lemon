import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  Stack,
  Image,
  Text,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  FormControl,
  FormLabel,
  Input,
  Divider,
  useToast,
  FormErrorMessage,
} from "@chakra-ui/react";
import { Formik, Form, Field } from "formik";
import { NumberInputControl } from "formik-chakra-ui";
import React from "react";
import * as Yup from "yup";

const validateSchema = Yup.object({
  name: Yup.string().min(3).required("your Name is required"),
  quantity: Yup.number().min(1).max(20).required("minimum quantity is 1"),
  address: Yup.string().min(3).required("your Address is required"),
});
function DeliveryForm({ dish, isOpen, onClose }) {
  const toast = useToast();
  return (
    <>
      <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <Formik
          initialValues={{
            name: "",
            address: "",
            quantity: 1,
          }}
          validationSchema={validateSchema}
        >
          {(formik) => (
            <ModalContent>
              <ModalHeader>{dish.Title}</ModalHeader>
              <ModalCloseButton />
              <ModalBody pb={6}>
                <Stack spacing={3}>
                  <Image
                    src={dish.SpecialImage}
                    height={250}
                    width={"100%"}
                    borderRadius={10}
                  />
                  <Text fontSize={14}>{dish.Description}</Text>
                  <Form>
                    <FormControl
                      mb={5}
                      isInvalid={formik.errors.name && formik.touched.name}
                    >
                      <FormLabel>Name</FormLabel>
                      <Field as={Input} type="text" name="name" id="name" />
                      <FormErrorMessage>{formik.errors.name}</FormErrorMessage>
                    </FormControl>
                    <NumberInputControl
                      label="Quantity"
                      name="quantity"
                      id="quantity"
                      numberInputProps={{
                        max: 20,
                        min: 1,
                        defaultValue: 1,
                      }}
                    />
                    <FormControl
                      mt={5}
                      isInvalid={
                        formik.errors.address && formik.touched.address
                      }
                    >
                      <FormLabel>Address</FormLabel>
                      <Field
                        as={Input}
                        name="address"
                        id="address"
                        type="text"
                      />
                      <FormErrorMessage>
                        {formik.errors.address}
                      </FormErrorMessage>
                    </FormControl>
                  </Form>
                </Stack>
              </ModalBody>
              <ModalFooter>
                <Button
                  colorScheme="yellow"
                  mr={3}
                  isDisabled={!formik.dirty || !formik.isValid}
                  onClick={() => {
                    onClose();
                    toast({
                      title: "your order is on its way",
                      variant: "left-accent",
                      status: "success",
                      isClosable: true,
                      containerStyle: {
                        marginTop: "80px",
                      },
                    });
                  }}
                >
                  Order now
                </Button>
                <Button onClick={onClose}>Cancel</Button>
              </ModalFooter>
            </ModalContent>
          )}
        </Formik>
      </Modal>
    </>
  );
}

export default DeliveryForm;
