import { Button, makeStyles } from "@material-ui/core";
import React from "react";

const useStyle = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

const OutlinedButton = () => {
  const classes = useStyle();
  return (
    <div className={classes.root}>
      <Button variant="outlined" size="small">
        Default - size small
      </Button>
      <Button
        variant="outlined"
        color="primary"
        onClick={() => {
          alert("Primary Outlined Button");
        }}
        size="medium"
      >
        Primary - click handle
      </Button>
      <Button variant="outlined" color="secondary" size="large">
        Secondary -size large
      </Button>
      <Button variant="outlined" disabled>
        Disabled
      </Button>
      <Button variant="outlined" color="primary" href="#">
        Link
      </Button>
    </div>
  );
};

export default OutlinedButton;
