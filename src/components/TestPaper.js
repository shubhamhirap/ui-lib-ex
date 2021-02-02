import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import SignIn from "./SignInForm";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    "& > *": {
      margin: theme.spacing(5),
      width: theme.spacing(70),
      height: theme.spacing(62),
    },
  },
}));

export default function TestPaper() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper>
        <SignIn />
      </Paper>
    </div>
  );
}
