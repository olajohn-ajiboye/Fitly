import React, { useState, useEffect } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import Hidden from "@material-ui/core/Hidden";

import { Chart, Motivation, SideBar, SummaryNav, AppBar } from "../components";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
    },
    container: {
      display: "flex",
      justifyContent: "space-between",
    },
  })
);

export default function Layout() {
  const { container, root } = useStyles();

  return (
    <div className={root}>
      <AppBar />
      <Grid container className={container} spacing={2}>
        <Grid item xs lg={3}>
          <Hidden xsDown={true}>
            <SideBar />
          </Hidden>
        </Grid>
        {/* Main */}
        <Grid item xs={12} sm={9}>
          <SummaryNav />
          <Chart />
          <Motivation />
        </Grid>
      </Grid>
    </div>
  );
}
