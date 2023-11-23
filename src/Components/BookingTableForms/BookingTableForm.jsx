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
  reservationTime: Yup.string().required(),
  chairsNumber: Yup.number().min(2).max(10).required(),
  tableNumber: Yup.number().min(1).max(12).required(),
});

const SubmitButton = ({ tableSelection, setTableSelection }) => {
  const formik = useFormikContext();
  return (
    <Button
      mr={3}
      isDisabled={!formik.dirty && !formik.isValid}
      colorScheme="yellow"
      onClick={() => {
        if (!tableSelection) {
          console.log(formik.values);
          if (formik.dirty && formik.isValid) {
            setTableSelection(true);
          } else {
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
                    <BookingTableInfoForm />
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
