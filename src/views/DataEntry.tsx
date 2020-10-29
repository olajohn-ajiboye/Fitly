import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { Paper, Grid } from "@material-ui/core";

import { Body } from "../features/dataEntry";
import { SideBar } from "../components";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      marginTop: 20,
    },
    item: {
      boxShadow: "0 8px 16px 0 #BDC9D7",
    },
    paper: {
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
        <Grid item xs lg={3}>
          <SideBar onMobileMenuClick={onMobileMenuClick} />
        </Grid>
        <Grid item xs={12} lg={9}>
          <Grid container spacing={2}>
            <Body />
            <Grid item xs={6} lg={4} className={classes.item}>
              <Paper className={classes.paper}>xs=6</Paper>
            </Grid>
            <Grid item xs={6} lg={4} className={classes.item}>
              X4
            </Grid>
            <Grid item xs={6} lg={4} className={classes.item}>
              X4
            </Grid>
            <Grid item xs={6} lg={4} className={classes.item}>
              X4
            </Grid>
            <Grid item xs={6} lg={4} className={classes.item}>
              X4
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};
