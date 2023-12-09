import {
  Avatar,
  AvatarBadge,
  Button,
  Divider,
  HStack,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as actions from "../actions/userActions";

function UserPopover(props) {
  const navigate = useNavigate();

  return (
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
    </Popover>
  );
}
const mapStateToProps = (state) => ({
  username: state.userReducer.username,
  password: state.userReducer.password,
});
const mapActionsToProps = {
  logout: actions.logout,
};
export default connect(mapStateToProps, mapActionsToProps)(UserPopover);
