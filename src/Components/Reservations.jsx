import { useEffect, useState } from "react";
import "./Reservations.css";
import {
  Button,
  Heading,
  IconButton,
  Stack,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useDisclosure,
} from "@chakra-ui/react";
import * as actions from "../actions/reservationActions";
import { connect } from "react-redux";
import { MdDelete } from "react-icons/md";
import BookingTableForm from "./BookingTableForms/BookingTableForm";

function Reservations(props) {
  const { isOpen, onClose, onOpen } = useDisclosure();
  return (
    <>
      <BookingTableForm isOpen={isOpen} onClose={onClose} />
      <Stack padding={30} height={"100%"} spacing={10} minHeight={"100vh"}>
        <Heading fontSize={30} mt={5}>
          Reservations
        </Heading>
        <Stack
          spacing={18}
          align={props.reservations.length > 0 ? "end" : "center"}
          width={"100%"}
        >
          {props.reservations.length > 0 ? (
            <TableContainer width={"100%"}>
              <Table variant="striped">
                <TableCaption></TableCaption>
                <Thead>
                  <Tr>
                    <Th>Name</Th>
                    <Th>Email Address</Th>
                    <Th>Phone Number</Th>
                    <Th>Reservation Date</Th>
                    <Th>Reservation Time</Th>
                    <Th>Table Number</Th>
                    <Th>Chairs Number</Th>
                    <Th>Actions</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {props.reservations.map((reservation, index) => {
                    return (
                      <Tr key={index}>
                        <Td>{reservation.userName}</Td>
                        <Td>{reservation.emailAddress}</Td>
                        <Td>{reservation.phoneNumber}</Td>
                        <Td>{reservation.reservationDate}</Td>
                        <Td>{reservation.reservationTime}</Td>
                        <Td>{reservation.tableNumber}</Td>
                        <Td>{reservation.chairsNumber}</Td>
                        <Td>
                          <IconButton
                            variant={"outline"}
                            colorScheme="red"
                            icon={<MdDelete size={"20"} color="red" />}
                            onClick={() =>
                              props.removeReservation(reservation.reservationId)
                            }
                          />
                        </Td>
                      </Tr>
                    );
                  })}
                </Tbody>
              </Table>
            </TableContainer>
          ) : (
            <Text justifyContent={"center"}>
              you don't have any reservations at the moment.
            </Text>
          )}
          <Button width={200} colorScheme="yellow" onClick={onOpen}>
            Make Reservation
          </Button>
        </Stack>
      </Stack>
    </>
  );
}
const mapActionsToProps = {
  removeReservation: actions.removeReservation,
};
const mapStateToProps = (state) => ({
  reservations: state.reservationsReducer.reservations,
});
export default connect(mapStateToProps, mapActionsToProps)(Reservations);
