import {
  Stack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalFooter,
  ModalBody,
  Button,
  useToast,
} from "@chakra-ui/react";
import { Formik, Form, useFormikContext } from "formik";
import { useState } from "react";
import BookingTableInfoForm from "./BookingTableInfoForm";
import BookingTableChoosingTableForm from "./BookingTableChoosingTableForm";
import * as Yup from "yup";

const validateSchema = Yup.object({
  reservationTime: Yup.string().min(3).required(),
  chairsNumber: Yup.number().min(2).max(10).required(),
  tableNumber: Yup.number().min(1).max(12).required(),
  userName: Yup.string().min(2).max(150).required("Name is Required"),
  phoneNumber: Yup.number().required("Phone number is Required"),
  emailAddress: Yup.string()
    .email("Email must be a valid email")
    .required("Email is Required"),
});

const SubmitButton = ({ tableSelection, setTableSelection, toast, errors }) => {
  const formik = useFormikContext();
  const haserrors =
    formik.dirty &&
    !(
      errors.reservationDate &&
      errors.reservationTime &&
      errors.tableNumber &&
      errors.chairsNumber
    );
  return (
    <Button
      mr={3}
      isDisabled={!haserrors}
      colorScheme="yellow"
      onClick={() => {
        if (!tableSelection) {
          console.log(formik.values);
          console.log(
            formik.dirty,
            errors.reservationDate,
            errors.reservationTime,
            errors.tableNumber,
            errors.chairsNumber
          );
          if (
            formik.dirty &&
            !(
              errors.reservationDate &&
              errors.reservationTime &&
              errors.tableNumber &&
              errors.chairsNumber
            )
          ) {
            setTableSelection(true);
          } else {
            toast({
              title: "please resolve all errors before percedding",
              variant: "left-accent",
              status: "error",
              position: "top",
              isClosable: true,
              containerStyle: {
                marginTop: "20px",
              },
            });
          }
        }
      }}
    >
      {tableSelection ? "Reserve Now" : "Next"}
    </Button>
  );
};

function BookingTableForm({ isOpen, onClose }) {
  // const formik = useFormikContext();
  const toast = useToast();
  const [tableSelection, setTableSelection] = useState(false);
  const handleOnSubmit = (data) => {
    console.log(data);
  };
  return (
    <Modal
      closeOnOverlayClick={false}
      isOpen={isOpen}
      onClose={onClose}
      size={"4xl"}
    >
      <ModalOverlay />
      <ModalContent>
        <Formik
          initialValues={{
            reservationDate: new Date(),
            reservationTime: "",
            chairsNumber: 2,
            tableNumber: -1,
          }}
          validationSchema={validateSchema}
          onSubmit={handleOnSubmit}
        >
          {({ handleSubmit, errors, touched }) => (
            <Form onSubmit={handleSubmit}>
              <ModalHeader>Reserve a Table</ModalHeader>
              <ModalCloseButton />
              <ModalBody pb={6}>
                <Stack>
                  {tableSelection ? (
                    <BookingTableInfoForm errors={errors} touched={touched} />
                  ) : (
                    <BookingTableChoosingTableForm
                      errors={errors}
                      touched={touched}
                    />
                  )}
                </Stack>
              </ModalBody>
              <ModalFooter>
                <SubmitButton
                  tableSelection={tableSelection}
                  setTableSelection={setTableSelection}
                  toast={toast}
                  errors={errors}
                />
                <Button
                  onClick={() => {
                    if (tableSelection) {
                      setTableSelection(false);
                    } else onClose();
                  }}
                >
                  {tableSelection ? "Back" : "Cancel"}
                </Button>
              </ModalFooter>
            </Form>
          )}
        </Formik>
      </ModalContent>
    </Modal>
  );
}

export default BookingTableForm;
