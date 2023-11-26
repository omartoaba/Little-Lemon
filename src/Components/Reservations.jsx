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
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import * as actions from "../actions/reservationActions";
import { connect } from "react-redux";
import { MdDelete } from "react-icons/md";

function Reservations(props) {
  return (
    <Stack padding={10} height={"100%"} spacing={10}>
      <Heading fontSize={30}>Reservations</Heading>
      {props.reservations.length > 0 ? (
        <TableContainer>
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
                      />
                    </Td>
                  </Tr>
                );
              })}
            </Tbody>
          </Table>
        </TableContainer>
      ) : (
        <Text>you don't have any reservations al the moment.</Text>
      )}
      <Button width={200} colorScheme="yellow">
        Make Reservation
      </Button>
    </Stack>
  );
}
const mapActionsToProps = {
  remove: actions.removeReservation,
};
const mapStateToProps = (state) => ({
  reservations: state.reservationsReducer.reservations,
});
export default connect(mapStateToProps, mapActionsToProps)(Reservations);
