import {
  Box,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  Wrap,
  WrapItem,
  Image,
  Text,
  FormControl,
  FormLabel,
  FormErrorMessage,
  SimpleGrid,
  HStack,
  Spacer,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { getRandomTableDate, getWorkTimes } from "../../assets/tablesdata";
import { FaChair } from "react-icons/fa";
import { ErrorMessage, Field, useFormikContext } from "formik";
import { TABLE_STATE } from "../../assets/tablesImages";
import {
  InputControl,
  NumberInputControl,
  SelectControl,
} from "formik-chakra-ui";
import { BsFillPersonFill, BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

const workHours = getWorkTimes("10:00 am", "10:00 pm");
let tablesData = getRandomTableDate();
const validateDate = (value) => {
  var today = new Date();
  var selectedDate = new Date(value);
  console.log(today > selectedDate);
  if (today > selectedDate)
    return "the Reservation date must be starting from today";
};

function ChoosingTableForm() {
  const formik = useFormikContext();
  const [chairsNumber, setChairsNumber] = useState(2);
  const [selectedTime, setSelectedTime] = useState();
  const [selectedDate, setSelectedDate] = useState();
  const [selectedTableIndex, setSelectedTableIndex] = useState(-1);
  console.log("render occured");
  const chairsNumberChanged = (e) => {
    setChairsNumber(e);
    setSelectedTableIndex(-1);
    formik.setFieldValue("chairsNumber", e);
  };
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
  useEffect(() => {
    tablesData = getRandomTableDate();
    setSelectedTableIndex(-1);
    console.log("from useEffect");
  }, [selectedTime, selectedDate]);
  return (
    <Stack spacing={2}>
      <SimpleGrid columns={3} width={"100%"} spacing={5} gap={2}>
        <FormControl
          isInvalid={formik.errors.userName && formik.touched.userName}
        >
          <FormLabel>Name</FormLabel>
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <Icon as={BsFillPersonFill} color="gray.300" />
            </InputLeftElement>
            <Field
              as={Input}
              type="text"
              name="userName"
              id="userName"
              pl={8}
            />
          </InputGroup>
          <FormErrorMessage>{formik.errors.userName}</FormErrorMessage>
        </FormControl>
        <FormControl
          isInvalid={formik.errors.phoneNumber && formik.touched.phoneNumber}
        >
          <FormLabel>Phone Number</FormLabel>
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <Icon as={BsFillTelephoneFill} color="gray.300" />
            </InputLeftElement>
            <Field
              as={Input}
              type="number"
              name="phoneNumber"
              id="phoneNumber"
              pl={8}
            />
          </InputGroup>
          <FormErrorMessage>{formik.errors.phoneNumber}</FormErrorMessage>
        </FormControl>
        <FormControl
          isInvalid={formik.errors.emailAddress && formik.touched.emailAddress}
        >
          <FormLabel>Email</FormLabel>
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <Icon as={MdEmail} color="gray.300" />
            </InputLeftElement>
            <Field
              as={Input}
              type="email"
              name="emailAddress"
              id="emailAddress"
              pl={8}
            />
          </InputGroup>
          <FormErrorMessage>{formik.errors.emailAddress}</FormErrorMessage>
        </FormControl>
        <FormControl
          isInvalid={
            formik.errors.reservationDate && formik.touched.reservationDate
          }
        >
          <FormLabel>Reservation Date</FormLabel>
          <Field
            as={Input}
            onChange={(e) => {
              setSelectedDate(e.target.valueAsDate.toISOString().split("T")[0]);
              formik.handleChange(e);
            }}
            value={selectedDate}
            type="date"
            id="reservationDate"
            name="reservationDate"
            validate={validateDate}
          />
          <FormErrorMessage>{formik.errors.reservationDate}</FormErrorMessage>
        </FormControl>
        <SelectControl
          value={selectedTime}
          defaultValue={workHours[0]}
          label="Reservarion Time"
          name="reservationTime"
          selectProps={{ placeholder: "Select Time" }}
          onChange={(e) => {
            setSelectedTime(e.target.value);
          }}
        >
          {workHours.map((hour, index) => {
            return (
              <option key={index} value={hour}>
                {hour}
              </option>
            );
          })}
        </SelectControl>
        <NumberInputControl
          name="chairsNumber"
          label="Chairs Number"
          numberInputProps={{
            value: chairsNumber,
            onChange: chairsNumberChanged,
            max: 10,
            min: 2,
            step: 2,
            defaultValue: 2,
          }}
        />
      </SimpleGrid>
      <Box
        padding={3}
        bg={"#DEDEDE"}
        borderRadius={10}
        width={"100%"}
        minHeight={200}
        mt={6}
        mb={0}
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
                      formik.setFieldValue("tableNumber", index + 1);
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
                      src={data.table}
                      width={40}
                      height={40}
                      style={{ transform: "scale(0.8)" }}
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
      <HStack>
        <Text
          mt={0}
          fontSize={16}
          color={selectedTableIndex > -1 ? "black" : "red"}
        >
          {selectedTableIndex > -1
            ? `Selected table number is : ${
                selectedTableIndex + 1
              } with number of sets:
        ${chairsNumber}`
            : "No table was selected."}
        </Text>
        <Spacer />
        <HStack spacing={2}>
          <Box bg={"#10B981"} boxSize={5} borderRadius={5} />
          <Text fontSize={16}>Available</Text>
          <Box bg={"#F2F259"} boxSize={5} borderRadius={5} />
          <Text fontSize={16}>Pending</Text>
          <Box bg={"#F25959"} boxSize={5} borderRadius={5} />
          <Text fontSize={16}>Booked</Text>
        </HStack>
      </HStack>
      <InputControl
        hidden
        name="tableNumber"
        inputProps={{ value: selectedTableIndex + 1 }}
      />
    </Stack>
  );
}

export default ChoosingTableForm;
