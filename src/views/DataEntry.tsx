import React from 'react';
import { Grid, Hidden } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

import { SideBar, VerticalDataCarousel } from '../components';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      marginTop: 20,
      padding: theme.spacing(2),
    },
  })
);

interface PageProps {
  onMobileMenuClick: () => void;
  active?: boolean;
}

export default ({ onMobileMenuClick, active }: PageProps) => {
  const { root } = useStyles();

  return (
    <div className={root}>
      <Grid container spacing={3} justify='center'>
        <Grid item xs lg={2} sm={2}>
          <Hidden xsDown={!active}>
            <SideBar onMobileMenuClick={onMobileMenuClick} />
          </Hidden>
        </Grid>
        <Grid item xs={12} sm={10} lg={10}>
          <VerticalDataCarousel />
        </Grid>
      </Grid>
    </div>
  );
};
