import {
  Box,
  HStack,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Select,
  Stack,
  Wrap,
  WrapItem,
  Image,
  Portal,
  Text,
  FormControl,
  FormLabel,
  FormErrorMessage,
} from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import { getRandomTableDate, getWorkTimes } from "../../assets/tablesdata";
import { FaChair } from "react-icons/fa";
import { Field } from "formik";
import { TABLE_STATE } from "../../assets/tablesImages";

const workHours = getWorkTimes("10:00 am", "10:00 pm");
let tablesData = getRandomTableDate();
const validateDate = (value) => {
  var today = new Date();
  // var selectedDate = new Date(value);
  console.log(today);
  console.log(selectedDate);
  console.log(today > selectedDate);
  if (today.getTime() < selectedDate.getTime())
    return "the Reservation date must be starting from today";
};
function BookingTableChoosingTableForm() {
  const [chairsNumber, setChairsNumber] = useState(2);
  const [selectedTime, setSelectedTime] = useState();
  const [selectedDate, setSelectedDate] = useState();
  const [selectedTableIndex, setSelectedTableIndex] = useState();
  const selectedStyle = {
    opacity: 1.0,
    transform: "scale(1.1)",
    transition: "opacity 0.3s, transform 0.3s",
  };
  const unselectedStyle = {
    opacity: 0.6,
    transform: "scale(1)",
    transition: "opacity 0.3s, transform 0.3s",
  };
  const table = useRef();
  useEffect(() => {
    tablesData = getRandomTableDate();
  }, [selectedTime, selectedDate]);
  return (
    <Stack spacing={5}>
      <HStack width={"100%"} spacing={8} justify={"space-between"}>
        <Field name="reservationDate" validate={validateDate}>
          {({ form, field }) => {
            return (
              <FormControl
                isInvalid={
                  form.errors.reservationDate && form.touched.reservationDate
                }
              >
                <FormLabel>Reservation Date</FormLabel>
                <Input
                  type="date"
                  {...field}
                  value={selectedDate}
                  onChange={(date) =>
                    setSelectedDate(
                      date.target.valueAsDate.toISOString().split("T")[0]
                    )
                  }
                />
                <FormErrorMessage>
                  {form.errors.reservationDate}
                </FormErrorMessage>
              </FormControl>
            );
          }}
        </Field>
        <Field name="reservationTime">
          {({ form, field }) => {
            return (
              <FormControl
                isInvalid={
                  form.errors.reservationTime && form.touched.reservationTime
                }
              >
                <FormLabel>Reservation Time</FormLabel>
                <Select
                  {...field}
                  value={selectedTime}
                  placeholder="Select Time"
                  defaultValue={""}
                  onChange={(e) => setSelectedTime(e.target.value)}
                >
                  {workHours.map((hour, index) => {
                    return (
                      <option key={index} value={hour}>
                        {hour}
                      </option>
                    );
                  })}
                </Select>
                <FormErrorMessage>
                  {form.errors.reservationTime}
                </FormErrorMessage>
              </FormControl>
            );
          }}
        </Field>
        <Field name="chairsNumber">
          {({ form, field }) => {
            return (
              <FormControl
                isInvalid={
                  form.errors.chairsNumber && form.touched.chairsNumber
                }
              >
                <FormLabel>Chairs Number</FormLabel>
                <InputGroup>
                  <NumberInput
                    value={chairsNumber}
                    max={10}
                    min={2}
                    defaultValue={2}
                    step={2}
                    onChange={(e) => {
                      setChairsNumber(e);
                      setSelectedTableIndex(-1);
                    }}
                  >
                    <InputLeftElement pointerEvents="none">
                      <Icon as={FaChair} color="gray.400" />
                    </InputLeftElement>
                    <NumberInputField pl={10} isReadOnly={true} />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                </InputGroup>
                <FormErrorMessage>{form.errors.chairsNumber}</FormErrorMessage>
              </FormControl>
            );
          }}
        </Field>
      </HStack>
      <Box
        padding={3}
        bg={"#DEDEDE"}
        borderRadius={10}
        width={"100%"}
        minHeight={250}
        mt={6}
      >
        <Wrap justify={"center"} spacing={4}>
          {tablesData.has(`${chairsNumber}`) ? (
            tablesData.get(`${chairsNumber}`).map((data, index) => {
              return (
                <WrapItem
                  key={index}
                  data-state={data.state}
                  cursor={
                    data.state === TABLE_STATE.AVAILABLE ? "pointer" : "no-drop"
                  }
                  _hover={{
                    opacity: data.state === TABLE_STATE.AVAILABLE ? 1.0 : 0.6,
                  }}
                  opacity={0.6}
                  onClick={(e) => {
                    if (
                      e.currentTarget.getAttribute("data-state") ===
                      TABLE_STATE.AVAILABLE
                    ) {
                      setSelectedTableIndex(index);
                    }
                  }}
                  style={
                    selectedTableIndex === index
                      ? selectedStyle
                      : unselectedStyle
                  }
                >
                  <Box position={"relative"}>
                    <Image
                      ref={table}
                      src={data.table}
                      width={40}
                      height={40}
                    />
                    <Text
                      position={"absolute"}
                      top={"50%"}
                      left={"50%"}
                      transform="translate(-50%, -50%)"
                      zIndex="2"
                      opacity={1}
                      color={"white"}
                      fontWeight={900}
                    >
                      {index + 1}
                    </Text>
                  </Box>
                </WrapItem>
              );
            })
          ) : (
            <Text fontWeight={600}>
              Oops! Looks like we don't have a table for the number of chairs
              you entered.
            </Text>
          )}
        </Wrap>
      </Box>
    </Stack>
  );
}

export default BookingTableChoosingTableForm;
