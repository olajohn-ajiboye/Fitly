import React from 'react';
import { Paper } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(2),
      textAlign: 'center',
      marginBottom: 20,
      color: theme.palette.text.secondary,
    },
  })
);

export default function Fast() {
  const { root } = useStyles();
  return (
    <>
      <Paper className={root}>Fast</Paper>
    </>
  );
}
