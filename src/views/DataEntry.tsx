import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { Paper, Grid } from "@material-ui/core";

import { Body } from "../features/dataEntry";
import { SideBar } from "../components";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
    },
  })
);

interface PageProps {
  onMobileMenuClick: () => void;
  active?: boolean;
}
export default ({ onMobileMenuClick }: PageProps) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <SideBar onMobileMenuClick={onMobileMenuClick} />
        </Grid>
        <Grid item xs={9}>
          <Grid container spacing={2}>
            <Body />
            <Grid item xs={6}>
              <Paper className={classes.paper}>xs=6</Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper className={classes.paper}>xs=3</Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper className={classes.paper}>xs=3</Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper className={classes.paper}>xs=3</Paper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};
