import React, { useState } from "react";
import SignUp from "./SignUp";

import { Box } from "@mui/material";
import SignIn from "./SignIn/SignIn";

const Authentication = () => {
  const [authView, setAuthView] = useState(false);

  return (
    <>
      <Box display="flex" height="100vh">
        <Box
          flex={1}
          display="flex"
          justifyContent="center"
          alignItems="center"
        ></Box>
        <Box
          flex={1}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          {authView ? (
            <SignUp setAuthView={setAuthView} />
          ) : (
            <SignIn setAuthView={setAuthView} />
          )}
        </Box>
      </Box>
    </>
  );
};

export default Authentication;
