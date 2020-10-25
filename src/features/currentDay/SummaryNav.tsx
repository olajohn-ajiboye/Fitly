import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { Grid, Paper } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      textAlign: "center",
      padding: theme.spacing(2),
      color: theme.palette.text.secondary,
    },
    paper: {
      height: "10vh",
      boxShadow: "0 8px 16px 0 #BDC9D7",
    },
  })
);

const SummaryNav = () => {
  const { root, paper } = useStyles();
  return (
    <Grid container spacing={3} className={root}>
      <Grid item xs={6} sm={3}>
        <Paper elevation={0} className={paper}>
          {" "}
          Weight
        </Paper>
      </Grid>
      <Grid item xs={6} sm={3}>
        <Paper elevation={0} className={paper}>
          {" "}
          BMI
        </Paper>
      </Grid>
      <Grid item xs={6} sm={3}>
        <Paper elevation={0} className={paper}>
          {" "}
          Strength
        </Paper>
      </Grid>
      <Grid item xs={6} sm={3}>
        <Paper elevation={0} className={paper}>
          {" "}
          Fast
        </Paper>
      </Grid>
    </Grid>
  );
};

export default SummaryNav;
