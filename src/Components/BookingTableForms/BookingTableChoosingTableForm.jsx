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
  VisuallyHiddenInput,
} from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import { getRandomTableDate, getWorkTimes } from "../../assets/tablesdata";
import { FaChair } from "react-icons/fa";
import { ErrorMessage, Field, useFormikContext } from "formik";
import { TABLE_STATE } from "../../assets/tablesImages";
import {
  InputControl,
  NumberInputControl,
  SelectControl,
} from "formik-chakra-ui";

const workHours = getWorkTimes("10:00 am", "10:00 pm");
let tablesData = new Map();
const validateDate = (value) => {
  var today = new Date();
  console.log(value);
  var selectedDate = new Date(value);
  console.log(today);
  console.log(selectedDate);
  console.log(today > selectedDate);
  if (today > selectedDate)
    return "the Reservation date must be starting from today";
};

function BookingTableChoosingTableForm({ errors, touched }) {
  const formik = useFormikContext();
  const [chairsNumber, setChairsNumber] = useState(2);
  const [selectedTime, setSelectedTime] = useState();
  const [selectedDate, setSelectedDate] = useState();
  const [selectedTableIndex, setSelectedTableIndex] = useState(-1);
  console.log("rerender occured");
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
  }, [selectedTime, selectedDate]);
  return (
    <Stack spacing={5}>
      <HStack width={"100%"} spacing={8} justify={"space-between"}>
        <FormControl
          isInvalid={errors.reservationDate && touched.reservationDate}
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
          <FormErrorMessage>{errors.reservationDate}</FormErrorMessage>
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
      </HStack>
      <Box
        padding={3}
        bg={"#DEDEDE"}
        borderRadius={10}
        width={"100%"}
        minHeight={250}
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
                    <Image src={data.table} width={40} height={40} />
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
      <Text
        mt={-3}
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
      <InputControl
        hidden
        name="tableNumber"
        inputProps={{ value: selectedTableIndex + 1 }}
      />
    </Stack>
  );
}

export default BookingTableChoosingTableForm;
