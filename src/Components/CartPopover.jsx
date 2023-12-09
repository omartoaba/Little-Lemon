import {
  Avatar,
  AvatarBadge,
  Button,
  HStack,
  IconButton,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverFooter,
  PopoverHeader,
  PopoverTrigger,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useToast,
} from "@chakra-ui/react";
import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { connect } from "react-redux";
import * as cartActions from "../actions/cartActions";

function CartPopover(props) {
  const toast = useToast();

  return (
    <Popover placement="auto" closeOnBlur={true}>
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
                            onClick={() => props.removeProduct(product.title)}
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
  );
}
const mapStateToProps = (state) => ({
  products: state.cartReducer.products,
});
const mapActionsToProps = {
  clearCart: cartActions.clearCart,
  removeProduct: cartActions.removeProduct,
};
export default connect(mapStateToProps, mapActionsToProps)(CartPopover);
