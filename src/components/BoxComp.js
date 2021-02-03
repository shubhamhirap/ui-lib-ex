import React from "react";
import { Box, Button, Typography } from "@material-ui/core";

const BoxComp = () => {
  return (
    <Typography component="div">
      <Box bgcolor="error.main">error.main</Box>
      <Box color="warning.main">warning.main</Box>
      <Box color="info.main">info.main</Box>
      <Box color="success.main">success.main</Box>
      <Box color="info.main" bgcolor="text.primary">
        bg text primary
      </Box>
      <Box bgcolor="text.secondary">error.main</Box>
      <Box bgcolor="text.disabled">error.main</Box>
    </Typography>
  );
};

export default BoxComp;
