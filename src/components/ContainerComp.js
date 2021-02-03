import React from "react";
import { Container, CssBaseline, Typography } from "@material-ui/core";

const ContainerComp = () => {
  return (
    <>
      <CssBaseline>
        <Container maxWidth={`xs`}>
          <Typography
            component="div"
            style={{ backgroundColor: "#cfe8fe", height: "100vh" }}
          />
        </Container>
      </CssBaseline>
    </>
  );
};

export default ContainerComp;
