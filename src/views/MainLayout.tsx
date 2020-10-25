import React, { useState } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { Grid, Hidden } from "@material-ui/core";

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
  const [active, setActive] = useState<boolean>(false);

  const onMobileMenuClick = () => {
    setActive(!active);
  };

  return (
    <div className={root}>
      <AppBar onMobileMenuClick={onMobileMenuClick} />
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
