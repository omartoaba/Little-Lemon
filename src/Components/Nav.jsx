import React from "react";
import Logo from "../assets/Logo.svg";
import "./Nav.css";
import {
  HStack,
  Spacer,
  IconButton,
  useToast,
  Image,
  Box,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  useDisclosure,
  Stack,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

import CartPopover from "./CartPopover";
import UserPopover from "./UserPopover";

const NavLinks = ({ display }) => {
  return (
    <Box display={display}>
      <nav>
        <Stack direction={{ base: "column", lg: "row" }} align={"flex-start"}>
          <li className="navbar_link">
            <Link to="home">Home</Link>
          </li>
          <li className="navbar_link">
            <a href="#about">About</a>
          </li>
          <li className="navbar_link">
            <Link to="menu">Menu</Link>
          </li>
          <li className="navbar_link">
            <Link to="reservations">Reservations</Link>
          </li>
          <li className="navbar_link">
            <Link to="orderonline">Order Online</Link>
          </li>
        </Stack>
      </nav>
    </Box>
  );
};
function Nav() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton mt={3} />
          <DrawerHeader>
            <Image src={Logo} />
          </DrawerHeader>
          <DrawerBody>
            <NavLinks display={{ base: "flex", lg: "none" }} />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
      <HStack
        paddingY={"10px"}
        justify={"center"}
        bg={"white"}
        width={"100%"}
        maxWidth={"100vw"}
        spacing={5}
        px={"10px"}
        // paddingX={"20px"}
        // pr={{ base: "0px", md: "20px" }}
      >
        <IconButton
          icon={<GiHamburgerMenu />}
          display={{ base: "flex", lg: "none" }}
          onClick={onOpen}
        ></IconButton>
        <Spacer />
        <HStack>
          <Image src={Logo} />
          <NavLinks display={{ base: "none", lg: "flex" }} />
        </HStack>
        <Spacer />
        {/* <Popover placement="auto" closeOnBlur={true}>
          <PopoverTrigger>
            <Avatar
              cursor={"pointer"}
              size={"sm"}
              icon={<FaShoppingCart color="black" size={"18"} />}
              bg={"#ECEEED"}
            >
              <AvatarBadge
                boxSize="1.8em"
                bg="red.500"
                alignItems={"center"}
                fontSize={"12"}
              >
                {props.products.reduce((c, p) => c + p.count, 0)}
              </AvatarBadge>
            </Avatar>
          </PopoverTrigger>
          <PopoverContent>
            <PopoverHeader pt={4} fontWeight="bold" border="0">
              <HStack>
                <Text fontSize={"md"} fontWeight={"semibold"}>
                  Total Cart Items: $
                  {props.products
                    .reduce((p, n) => p + n.price * n.count, 0)
                    .toFixed(2)}
                </Text>
              </HStack>
            </PopoverHeader>
            <PopoverArrow />
            <PopoverCloseButton />
            <PopoverBody>
              {props.products.length > 0 ? (
                <TableContainer
                  maxHeight={"300px"}
                  overflowY={"auto"}
                  overflowX={"hidden"}
                >
                  <Table variant="simple" size={"sm"}>
                    <Thead bg={"transparent"}>
                      <Tr>
                        <Th bg={"transparent"} borderColor={"transparent"}>
                          Dish
                        </Th>
                        <Th bg={"transparent"} borderColor={"transparent"}>
                          Count
                        </Th>
                      </Tr>
                    </Thead>
                    <Tbody>
                      {props.products.map((product, index) => {
                        return (
                          <Tr key={index}>
                            <Td>{product.title}</Td>
                            <Td>{product.count}</Td>
                            <Td>
                              <IconButton
                                variant={"ghost"}
                                icon={<MdDelete size={"20"} color="red" />}
                                onClick={() =>
                                  props.removeProduct(product.title)
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
                <Text fontSize={"12"}>your cart is empty.</Text>
              )}
            </PopoverBody>
            <PopoverFooter>
              <HStack justify={"space-between"} spacing={5}>
                <Button
                  colorScheme="green"
                  variant={"solid"}
                  onClick={() => {
                    if (props.products.length < 1)
                      toast({
                        title: "your cart is empty",
                        variant: "left-accent",
                        status: "error",
                        isClosable: true,
                        duration: 3000,
                        position: "top-left",
                        containerStyle: {
                          marginTop: "80px",
                        },
                      });
                  }}
                >
                  Check out
                </Button>
                <Button
                  colorScheme="red"
                  variant={"outline"}
                  onClick={() => props.clearCart()}
                >
                  Clear Cart
                </Button>
              </HStack>
            </PopoverFooter>
          </PopoverContent>
        </Popover>
        <Popover placement="auto" closeOnBlur={true}>
          <PopoverTrigger>
            <Avatar
              cursor={"pointer"}
              name={props.username}
              size={"sm"}
              src="https://bit.ly/broken-link"
            >
              <AvatarBadge boxSize="1em" bg="green.500" />
            </Avatar>
          </PopoverTrigger>
          <PopoverContent>
            <PopoverHeader pt={4} fontWeight="bold" border="0">
              <HStack>
                <Avatar
                  name={props.username}
                  size={"sm"}
                  src="https://bit.ly/broken-link"
                />
                <Text fontSize={"md"}>{props.username}</Text>
              </HStack>
            </PopoverHeader>
            <PopoverArrow />
            <PopoverCloseButton />
            <PopoverBody>
              <Divider />
              <Button
                width={"100%"}
                colorScheme="red"
                variant={"ghost"}
                onClick={() => navigate("/#/login")}
              >
                Logout
              </Button>
            </PopoverBody>
          </PopoverContent>
        </Popover> */}
        <CartPopover />
        <UserPopover />
      </HStack>
    </>
  );
}
export default Nav;
