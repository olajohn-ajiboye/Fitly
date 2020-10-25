import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { Grid, Hidden } from "@material-ui/core";

import { Chart } from "../features/chart";
import { SummaryNav } from "../features/currentDay";
import { SideBar } from "../components";
import { Motivation } from "../features/motivation";

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

interface LayoutProps {
  onMobileMenuClick: () => void;
  active: boolean;
}
export default function Layout({ onMobileMenuClick, active }: LayoutProps) {
  const { container, root } = useStyles();

  return (
    <div className={root}>
      <Grid container className={container} spacing={2}>
        <Grid item xs lg={3}>
          <Hidden xsDown={!active}>
            <SideBar onMobileMenuClick={onMobileMenuClick} />
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
