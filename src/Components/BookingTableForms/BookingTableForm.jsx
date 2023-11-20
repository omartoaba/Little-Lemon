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
import { Formik, Form } from "formik";
import { useState } from "react";
import BookingTableInfoForm from "./BookingTableInfoForm";
import BookingTableChoosingTableForm from "./BookingTableChoosingTableForm";
import * as Yup from "yup";

const validateSchema = Yup.object().shape({});

function BookingTableForm({ isOpen, onClose }) {
  const toast = useToast();
  const [tableSelection, setTableSelection] = useState(false);
  return (
    <Modal
      closeOnOverlayClick={false}
      isOpen={isOpen}
      onClose={onClose}
      size={"4xl"}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Reserve a Table</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <Formik
            initialValues={{
              reservationDate: new Date(),
              reservationTime: "14:00",
              chairsNumber: 2,
            }}
            validationSchema={validateSchema}
          >
            {(props) => (
              <Form>
                <Stack>
                  {tableSelection ? (
                    <BookingTableInfoForm />
                  ) : (
                    <BookingTableChoosingTableForm />
                  )}
                </Stack>
              </Form>
            )}
          </Formik>
        </ModalBody>
        <ModalFooter>
          <Button
            colorScheme="yellow"
            mr={3}
            onClick={() => {
              if (!tableSelection) {
                console.log("validation result");
                validateSchema.validateSync();
                // console.log(result);
                setTableSelection(true);
              }
            }}
          >
            {tableSelection ? "Reserve Now" : "Next"}
          </Button>
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
      </ModalContent>
    </Modal>
  );
}

export default BookingTableForm;
