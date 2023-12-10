import React from "react";
import BannerImage from "../assets/restauranfood.jpg";
import "./HeroSection.css";
import {
  Box,
  Button,
  HStack,
  Heading,
  Image,
  Spacer,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import BookingTableForm from "./BookingTableForms/BookingTableForm";
function HeroSection() {
  const { isOpen, onClose, onOpen } = useDisclosure();
  return (
    <>
      <BookingTableForm isOpen={isOpen} onClose={onClose} />
      <HStack
        justify={"center"}
        padding={"20px"}
        mt={"50px"}
        bg={"var(--seconday-color)"}
        width={"100%"}
        align={"center"}
      >
        <Stack spacing={5} color={"white"}>
          <Heading
            as={"h1"}
            fontSize={{ base: "3xl", lg: "5xl" }}
            color={"var(--primary-color)"}
          >
            Little Lemon
          </Heading>
          <Heading fontSize={{ base: "2xl", lg: "4xl" }}>Chicago</Heading>
          <Text
            fontSize={{ base: "md", lg: "lg" }}
            fontWeight={700}
            maxW={400}
            mt={5}
            lineHeight={1.3}
            textAlign={"justify"}
          >
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with modren twist.
          </Text>
          <Button
            colorScheme="yellow"
            borderRadius={20}
            size={{ base: "md", lg: "lg" }}
            onClick={onOpen}
          >
            Reserve a Table
          </Button>
        </Stack>
        <Image
          width={{ base: "200px", lg: "300px" }}
          maxHeight={"350px"}
          src={BannerImage}
          mb={"-150px"}
          display={{ base: "none", md: "flex" }}
          ml={"20px"}
          loading="lazy"
          borderRadius={"10"}
        />
      </HStack>
    </>
  );
}

export default HeroSection;
