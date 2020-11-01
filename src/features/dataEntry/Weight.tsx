import React from 'react';
import { Paper, Typography } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

import weight from '../../assets/balance.svg';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      padding: theme.spacing(2),
      textAlign: 'center',
      marginBottom: 20,
    },
    title: {
      marginBottom: theme.spacing(3),
    },
    body: {
      display: 'flex',
      justifyContent: 'space-around',
      '& img ': {
        width: 30,
        height: 30,
        margin: 10,
      },
    },
    balance: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    input: {},
  })
);

export default () => {
  const { body, root, title } = useStyles();

  return (
    <>
      <Paper className={root}>
        <Typography variant='h6' className={title}>
          Weight
        </Typography>
        <div className={body}>
          <img src={weight} alt='body' />
          <input type='number' />
        </div>
      </Paper>
    </>
  );
};
