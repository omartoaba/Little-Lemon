import {
  Stack,
  HStack,
  Spacer,
  Text,
  Heading,
  Image,
  List,
  ListItem,
  Button,
  Icon,
  DarkMode,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import React from "react";
import FooterBanner from "../assets/footerImg.jpg";
import FooterLogo from "../assets/footerlogo.png";
import {
  MdHome,
  MdRestaurantMenu,
  MdTableRestaurant,
  MdRestaurant,
  MdFacebook,
  MdEmail,
} from "react-icons/md";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <Stack spacing={0} id="about">
      <HStack
        background={"var(--primary-color)"}
        padding={{ base: 5, md: 10 }}
        align={"start"}
      >
        <Stack>
          <Heading size={"lg"}>Little Lemon Chicago</Heading>
          <Text
            fontSize={{ base: "sm", md: "md" }}
            fontWeight={700}
            maxW={400}
            lineHeight={1.3}
            textAlign={"justify"}
          >
            Little Lemon opened in 1995 by two Italian brothers, Adrian and
            Mario. Despite the city's diversity, the two brothers recongnized
            the lack of Mediterranean cuisine in Chicago, and were inspired to
            bring the flavors of thier hometown in Italy to the people of
            Chicago. This two brothers continue to oversee the Little Lemon
            restaurant, nearly thirty years later.
          </Text>
        </Stack>
        <Spacer />
        <Image
          src={FooterBanner}
          borderRadius="full"
          boxSize={{ base: "150px", md: "230px" }}
          loading="lazy"
        />
      </HStack>
      <HStack
        background={"var(--seconday-color)"}
        paddingX={{ base: 50, md: 100, lg: 150 }}
        paddingY={10}
        align={"start"}
        justifyContent={"space-between"}
        color={"white"}
      >
        <Image
          src={FooterLogo}
          aspectRatio={"auto"}
          width={70}
          loading="lazy"
        />
        <Wrap
          justify={"space-between"}
          width={"100%"}
          ml={20}
          mr={20}
          align={"start"}
          spacing={10}
        >
          <WrapItem>
            <Stack>
              <Heading size={"md"}>Navigation</Heading>
              <DarkMode>
                <List spacing={0}>
                  <ListItem color={"white"}>
                    <Link href="/home">
                      <Button
                        background={"transparent"}
                        leftIcon={<Icon as={MdHome} size={20} />}
                        alignItems={"center"}
                        color={"white"}
                      >
                        <Link to={"home"}>Home</Link>
                      </Button>
                    </Link>
                  </ListItem>
                  <ListItem color={"white"}>
                    <Link href="menu">
                      <Button
                        background={"transparent"}
                        leftIcon={<Icon as={MdRestaurantMenu} size={20} />}
                        alignItems={"center"}
                        color={"white"}
                      >
                        <Link to={"menu"}>Menu</Link>
                      </Button>
                    </Link>
                  </ListItem>
                  <ListItem color={"white"}>
                    <Button
                      background={"transparent"}
                      leftIcon={<Icon as={MdTableRestaurant} size={20} />}
                      alignItems={"center"}
                      color={"white"}
                    >
                      <Link to={"reservations"}>Reservations</Link>
                    </Button>
                  </ListItem>
                  <ListItem color={"white"}>
                    <Link href="reservations">
                      <Button
                        background={"transparent"}
                        leftIcon={<Icon as={MdRestaurant} size={20} />}
                        alignItems={"center"}
                        color={"white"}
                      >
                        <Link to={"order"}>Order</Link>
                      </Button>
                    </Link>
                  </ListItem>
                </List>
              </DarkMode>
            </Stack>
          </WrapItem>
          <WrapItem>
            <Stack>
              <Heading size={"md"}>Contact</Heading>
              <Text width={200} fontSize={"md"}>
                2395 Maldove Way, Chicago Illinios (629)-243-6827
                info@littlelemon.com
              </Text>
            </Stack>
          </WrapItem>
          <WrapItem>
            <Stack>
              <Heading size={"md"}>Connect</Heading>
              <DarkMode>
                <List spacing={0}>
                  <ListItem color={"white"}>
                    <Link href="https://www.facebook.com">
                      <Button
                        background={"transparent"}
                        leftIcon={<Icon as={MdFacebook} size={20} />}
                        alignItems={"center"}
                        color={"white"}
                      >
                        Facebook
                      </Button>
                    </Link>
                  </ListItem>
                  <ListItem color={"white"}>
                    <Link href="https://www.instagram.com">
                      <Button
                        background={"transparent"}
                        leftIcon={<Icon as={BiLogoInstagramAlt} size={20} />}
                        alignItems={"center"}
                        color={"white"}
                      >
                        Instagram
                      </Button>
                    </Link>
                  </ListItem>
                  <ListItem color={"white"}>
                    <Link href="/">
                      <Button
                        background={"transparent"}
                        leftIcon={<Icon as={MdEmail} size={20} />}
                        alignItems={"center"}
                        color={"white"}
                      >
                        Join Us!
                      </Button>
                    </Link>
                  </ListItem>
                </List>
              </DarkMode>
            </Stack>
          </WrapItem>
        </Wrap>
      </HStack>
    </Stack>
  );
}

export default Footer;
