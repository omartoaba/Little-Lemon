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
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { getRandomTableDate, getWorkTimes } from "../../assets/tablesdata";
import { BsFillPeopleFill } from "react-icons/bs";

const workHours = getWorkTimes("10:00 am", "10:00 pm");
let tablesData = getRandomTableDate();
function BookingTableChoosingTableForm() {
  const [guestsNumber, setGuestesNumber] = useState(2);
  const [selectedTime, setSelectedTime] = useState();
  useEffect(() => {
    tablesData = getRandomTableDate();
  }, [selectedTime]);
  return (
    <Stack spacing={5}>
      <HStack width={"100%"} spacing={8} justify={"space-between"}>
        <Input type="date" />
        <Select
          value={selectedTime}
          placeholder="Select Time"
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
        <InputGroup>
          <NumberInput
            value={guestsNumber}
            max={10}
            min={2}
            step={2}
            defaultValue={2}
            onChange={(e) => setGuestesNumber(e)}
          >
            <InputLeftElement pointerEvents="none">
              <Icon as={BsFillPeopleFill} color="gray.100" />
            </InputLeftElement>
            <NumberInputField value={guestsNumber} pl={10} readOnly={true} />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </InputGroup>
      </HStack>
      <Box
        padding={3}
        bg={"#DEDEDE"}
        borderRadius={10}
        width={"100%"}
        minHeight={250}
      >
        <Wrap justify={"center"} spacing={3}>
          {tablesData.get(`${guestsNumber}`).map((data, index) => {
            return (
              <WrapItem
                key={index}
                cursor={"pointer"}
                _hover={{ opacity: 1.0 }}
                opacity={0.6}
              >
                <Image src={data} width={40} height={"auto"} />
              </WrapItem>
            );
          })}
        </Wrap>
      </Box>
    </Stack>
  );
}

export default BookingTableChoosingTableForm;
