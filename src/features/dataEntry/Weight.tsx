import React, { useState } from 'react';
import {
  Paper,
  Typography,
  FormControl,
  FormHelperText,
  InputAdornment,
  FilledInput,
} from '@material-ui/core';
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
  const [weight, setWeight] = useState(90);

  const handleChange = ({
    target,
  }: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setWeight(parseInt(target.value));
  };

  const updateWeight = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
    }
  };

  return (
    <>
      <Paper className={root}>
        <Typography variant='h6' className={title}>
          Weight
        </Typography>
        <FormControl variant='filled'>
          <FilledInput
            onKeyPress={(e) => updateWeight(e)}
            id='filled-adornment-weight'
            type='number'
            value={weight}
            onChange={(e) => handleChange(e)}
            endAdornment={<InputAdornment position='end'>Kg</InputAdornment>}
            aria-describedby='filled-weight-helper-text'
            inputProps={{
              'aria-label': 'weight',
            }}
          />
          <FormHelperText id='filled-weight-helper-text'>
            Enter Weight
          </FormHelperText>
        </FormControl>
      </Paper>
    </>
  );
};
