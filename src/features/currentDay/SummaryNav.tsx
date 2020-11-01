import React, { useEffect } from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Grid, Paper } from '@material-ui/core';

import { fastData } from '../dataEntry/dataEntrySlice';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      textAlign: 'center',
      padding: theme.spacing(2),
      color: theme.palette.text.secondary,
    },
    paper: {
      height: '10vh',
      boxShadow: '0 8px 16px 0 #BDC9D7',
    },
  })
);

const SummaryNav = () => {
  const { root, paper } = useStyles();
  const { feeling, start_time, end_time } = useSelector(fastData, shallowEqual);

  useEffect(() => {}, [feeling]);

  return (
    <Grid container spacing={3} className={root}>
      <Grid item xs={6} sm={3}>
        <Paper elevation={0} className={paper}>
          {' '}
          {feeling}
        </Paper>
      </Grid>
      <Grid item xs={6} sm={3}>
        <Paper elevation={0} className={paper}>
          {' '}
          {start_time}
        </Paper>
      </Grid>
      <Grid item xs={6} sm={3}>
        <Paper elevation={0} className={paper}>
          {' '}
          {end_time}
        </Paper>
      </Grid>
      <Grid item xs={6} sm={3}>
        <Paper elevation={0} className={paper}>
          {' '}
          Fast
        </Paper>
      </Grid>
    </Grid>
  );
};

export default SummaryNav;
