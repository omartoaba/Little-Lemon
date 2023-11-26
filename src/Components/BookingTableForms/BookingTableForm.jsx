import {
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
import ChoosingTableForm from "./ChoosingTableForm";
import * as Yup from "yup";
import * as actions from "../../actions/reservationActions";
import { connect } from "react-redux";

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

function BookingTableForm({ isOpen, onClose, addReservation }) {
  const toast = useToast();
  const handleOnSubmit = (data) => {
    addReservation({
      ...data,
      reservationId: Math.floor(Math.random() * 100_000) + 1,
    });
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
          {({ handleSubmit, dirty, isValid }) => (
            <Form onSubmit={handleSubmit}>
              <ModalHeader>Reserve a Table</ModalHeader>
              <ModalCloseButton />
              <ModalBody pb={6}>
                <ChoosingTableForm />
              </ModalBody>
              <ModalFooter>
                <Button
                  type="submit"
                  mr={5}
                  colorScheme="yellow"
                  isDisabled={!dirty || !isValid}
                >
                  Reserve Now
                </Button>
                <Button onClick={onClose}>Cancel</Button>
              </ModalFooter>
            </Form>
          )}
        </Formik>
      </ModalContent>
    </Modal>
  );
}
const mapActionsToProps = {
  addReservation: actions.addReservation,
};
export default connect(null, mapActionsToProps)(BookingTableForm);
