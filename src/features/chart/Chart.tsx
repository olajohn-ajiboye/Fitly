import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";

import ChartSide from "./ChartSide";
import ChartTiles from "./ChartTiles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      textAlign: "center",
      color: theme.palette.text.secondary,
      padding: theme.spacing(2),
    },
  })
);

export default function Chart() {
  const { root } = useStyles();

  return (
    <Grid container spacing={2} className={root}>
      <ChartTiles />
      <ChartSide />
    </Grid>
  );
}
