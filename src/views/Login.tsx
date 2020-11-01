import React from 'react';
import { useDispatch } from 'react-redux';
import { Button, Grid, Paper } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

import google from '../assets/google.png';
import Icon from '../components/Styles/Icons';

import { loginAsync } from '../features/auth/index';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      marginTop: 50,
      '& img': {
        marginRight: 30,
      },
    },
    button: {
      width: 300,
    },
  })
);

export default function LoginPage() {
  const dispatch = useDispatch();
  const { root, button } = useStyles();

  const login = async () => {
    await dispatch(loginAsync());
    if (window.location.pathname.includes('/login')) {
      window.location.replace('/');
    }
  };

  return (
    <Grid container justify='center' className={root}>
      <Paper>
        <Grid item>
          <Button className={button} onClick={() => login()}>
            {' '}
            <Icon src={google} alt='login button' /> Sign in
          </Button>
        </Grid>
      </Paper>
    </Grid>
  );
}
