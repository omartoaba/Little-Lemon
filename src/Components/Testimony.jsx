import {
  Avatar,
  Text,
  Divider,
  HStack,
  Heading,
  Icon,
  Stack,
} from "@chakra-ui/react";
import React from "react";
import { BiSolidStar } from "react-icons/bi";
import { PiQuotesFill } from "react-icons/pi";

function Testimony({ avatar, quote, username, rating = 5 }) {
  return (
    <>
      <Stack
        justifyContent={"center"}
        alignItems={"center"}
        bg={"#ECEEED"}
        shadow={"md"}
        padding={8}
        margin={5}
        width={350}
        borderRadius={10}
      >
        <Avatar src={avatar} size={"xl"} loading="lazy" />
        <Stack spacing={2}>
          <Icon
            as={PiQuotesFill}
            boxSize={"10"}
            color={"gray.400"}
            margin={"0 auto"}
          />
          <Text fontSize={14}>{quote}</Text>
          <Divider />
          <Heading size={"md"}>{username}</Heading>
          <HStack spacing={1}>
            {Array.from({ length: rating }).map((data, index) => {
              return <Icon key={index} as={BiSolidStar} color={"yellow.400"} />;
            })}
          </HStack>
        </Stack>
      </Stack>
    </>
  );
}

export default Testimony;
