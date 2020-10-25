import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

import weight from "../../assets/balance.svg";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      boxShadow: "0 8px 16px 0 #BDC9D7",
      marginTop: 20,
      textAlign: "center",
    },
    title: {
      marginBottom: theme.spacing(3),
    },
    body: {
      display: "flex",
      justifyContent: "space-around",
      "& img ": {
        width: 50,
        height: 50,
        margin: 10,
      },
    },
    balance: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
    },
    input: {},
  })
);

export default () => {
  const { body, balance, input, root, title } = useStyles();

  const setWeight = () => {};

  return (
    <>
      <Grid item xs={4} className={root}>
        <Typography variant="h6" className={title}>
          Weight
        </Typography>
        <div className={body}>
          <img src={weight} alt="body" />
          <input type="number" />
        </div>
      </Grid>
    </>
  );
};
