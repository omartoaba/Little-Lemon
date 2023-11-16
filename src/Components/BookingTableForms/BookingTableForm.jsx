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
          <Formik initialValues={{ time: "10:00 am", guests: 2 }}>
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
            onClick={() => setTableSelection(true)}
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
