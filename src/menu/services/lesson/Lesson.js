import React from 'react';
import { withStyles, Grid } from '@material-ui/core';
import ArcChartBox from './view/ArcChartBox';
import Statistics from './Statistics';

const styles = () => ({
  root: {
    height: '100%',
  },
  side: {
    height: '100%',
  },
});

const Lesson = ({classes}) => (
  <Grid className={classes.root} container>
    <Grid className={classes.side} item xs={12} md={3}>
      <ArcChartBox/>
    </Grid>
    <Grid item xs={12} md={9}>
      <Statistics/>
    </Grid>
  </Grid>
);

export default withStyles(styles)(Lesson);
