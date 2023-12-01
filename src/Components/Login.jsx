import {
  HStack,
  Stack,
  Text,
  Image,
  Heading,
  InputGroup,
  InputRightElement,
  Input,
  IconButton,
  Button,
  DarkMode,
  FormControl,
  FormErrorMessage,
} from "@chakra-ui/react";
import { useState } from "react";
import { connect } from "react-redux";
import LoginImage from "../assets/login.jpg";
import Logo from "../assets/Logo.svg";
import * as actions from "../actions/userActions";
import { BiSolidShow, BiSolidHide } from "react-icons/bi";
import { Field, Form, Formik, useFormikContext } from "formik";
import { useNavigate } from "react-router-dom";

function Login(props) {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const validateEmptyFields = (value) => {
    if (!value) return "this field is required";
  };
  const onLoginSubmit = (data) => {
    props.login({ username: data.username, password: data.password });
    navigate("/home");
  };
  return (
    <>
      <Stack
        justify={"center"}
        alignItems={"center"}
        bg={"var(--seconday-color)"}
        height={"100vh"}
        width={"100vw"}
      >
        <HStack width={"1000px"} height={"500px"} spacing={0}>
          <Stack
            boxShadow={"md"}
            justify={"center"}
            spacing={5}
            bg={"white"}
            height={"500px"}
            padding={"10"}
            mr={"0"}
            borderRadius={"10px 0 0 10px"}
          >
            <Image src={Logo} width={"200px"} margin={"0 auto"} />
            <Heading size={"lg"} margin={"0 auto"}>
              Welcome back
            </Heading>
            <Text fontSize={"14px"} opacity={"0.6"}>
              this page is just for demonstration purposes, you can login with
              any User name or Password.
            </Text>
            <Formik
              initialValues={{ username: "", password: "" }}
              onSubmit={onLoginSubmit}
            >
              {(props) => (
                <Form>
                  <Stack spacing={3}>
                    <Field name="username" validate={validateEmptyFields}>
                      {({ field, form }) => (
                        <FormControl
                          isInvalid={
                            form.errors.username && form.touched.username
                          }
                        >
                          <Input
                            placeholder="User name"
                            {...field}
                            size="md"
                            data-testid="username"
                          />
                          <FormErrorMessage>
                            {form.errors.username}
                          </FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>
                    <InputGroup size="md">
                      <Field name="password" validate={validateEmptyFields}>
                        {({ field, form }) => (
                          <FormControl
                            isInvalid={
                              form.errors.password && form.touched.password
                            }
                          >
                            <Input
                              pr="4.5rem"
                              type={show ? "text" : "password"}
                              placeholder="Password"
                              {...field}
                              data-testid="password"
                            />
                            <FormErrorMessage>
                              {form.errors.username}
                            </FormErrorMessage>
                          </FormControl>
                        )}
                      </Field>
                      <InputRightElement width="4.5rem">
                        <DarkMode>
                          <IconButton
                            color={"black"}
                            ml={"15px"}
                            size={"md"}
                            icon={show ? <BiSolidShow /> : <BiSolidHide />}
                            onClick={handleClick}
                          />
                        </DarkMode>
                      </InputRightElement>
                    </InputGroup>
                    <Button
                      type="submit"
                      colorScheme="yellow"
                      data-testid="login"
                    >
                      Login
                    </Button>
                  </Stack>
                </Form>
              )}
            </Formik>
          </Stack>
          <Image
            boxShadow={"md"}
            src={LoginImage}
            borderRadius={"0 10px 10px 0"}
            boxSize="500px"
            ml={"0"}
            objectFit="cover"
          />
        </HStack>
      </Stack>
    </>
  );
}

const mapActionsToProps = {
  login: actions.login,
};
export default connect(null, mapActionsToProps)(Login);
