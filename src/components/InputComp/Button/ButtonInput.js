import { Button } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

const ButtonInput = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {/* default button has no elevation */}
      <Button variant="contained" disableElevation>
        Default
      </Button>
      <Button variant="contained" color="primary">
        Primary
      </Button>
      <Button variant="contained" color="secondary">
        Secondary
      </Button>
      <Button variant="contained" disabled>
        Disabled
      </Button>
      <Button variant="contained" color="primary" href="#">
        Link
      </Button>
    </div>
  );
};

export default ButtonInput;
