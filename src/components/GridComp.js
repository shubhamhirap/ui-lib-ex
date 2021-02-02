import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles, Paper } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  elementHeight: {
    height: "100vh",
  },
  paper: {
    height: 240,
    width: 180,
    background: "#323232",
    color: "#fff",
    textAlign: "center",
    lineHeight: "240px",
  },
  control: {
    padding: theme.spacing(2),
  },
}));

const GridComp = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid
          container
          justify="center"
          className={classes.elementHeight}
          alignItems="center"
          spacing={2}
        >
          {[0, 1, 2].map((value) => (
            <Grid key={value} item>
              <Paper className={classes.paper}>
                <div>Hi there!!!</div>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default GridComp;
