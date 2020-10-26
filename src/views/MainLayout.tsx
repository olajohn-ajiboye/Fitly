import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { Grid, Hidden } from "@material-ui/core";

import { Chart } from "../features/chart";
import { SummaryNav } from "../features/currentDay";
import { SideBar } from "../components";
import { Motivation } from "../features/motivation";
import { CurrentUser } from "../services/firestore";

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
  user?: CurrentUser;
}
export default function Layout({
  onMobileMenuClick,
  active,
  user,
}: LayoutProps) {
  const { container, root } = useStyles();

  return (
    <>
      {user?.displayName ? (
        <div className={root}>
          <Grid container className={container} spacing={2}>
            <Grid item xs lg={3}>
              <Hidden xsDown={!active}>
                <SideBar onMobileMenuClick={onMobileMenuClick} user={user} />
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
      ) : (
        <div>Please Login</div>
      )}
    </>
  );
}
