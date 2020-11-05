import React from 'react';
import { Paper, Button } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import EditTwoToneIcon from '@material-ui/icons/EditTwoTone';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(2),
      textAlign: 'center',
      marginBottom: 20,
      color: theme.palette.text.secondary,
    },
    start: {
      display: 'flex',
      width: 200,
      justifyContent: 'space-around',
    },
    end: {
      display: 'flex',
      width: 200,
      marginTop: 20,
      justifyContent: 'space-around',
    },
  })
);

export default function Fast() {
  const { end, root, start } = useStyles();
  return (
    <>
      <Paper className={root}>
        <div className={start}>
          <Button variant='contained' size='small'>
            Start
          </Button>
          <EditTwoToneIcon> Edit start </EditTwoToneIcon>
        </div>

        <div className={end}>
          <Button variant='contained' size='small'>
            End
          </Button>
          <EditTwoToneIcon />
        </div>
        <div className='count'>count</div>
      </Paper>
    </>
  );
}
