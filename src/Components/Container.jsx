import React from "react";
import Nav from "./Nav";
import { useLocation } from "react-router-dom";
import { Stack, Box } from "@chakra-ui/react";

import Footer from "./Footer";
import Login from "./Login";

function Container(props) {
  const location = useLocation();
  const isLoginPage = location.pathname === "/login";
  return (
    <>
      {isLoginPage ? (
        <Login />
      ) : (
        <Stack spacing={5} width={"100vw"}>
          <header className="mainnavbar">
            <Nav />
          </header>
          <main>
            <Box mt={10}>{props.children}</Box>
          </main>
          <footer>
            <Footer />
          </footer>
        </Stack>
      )}
    </>
  );
}

export default Container;
