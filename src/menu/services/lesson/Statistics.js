import React from 'react';
import {
  withStyles,
  Grid,
} from '@material-ui/core';
import { default as CardStatistics } from './statistics/Statistics';
import Notes from './statistics/Notes';
import Indications from './statistics/Indications';

const styles = theme => ({
  root: {
    height: 430,
    gap: '20px',
    padding: theme.spacing(4),
  },
  paperStatistic: {
    background: '#f2f2f2',
    borderRadius: 4,
  },
});

const Statistics = ({classes}) => (
  <Grid className={classes.root} container wrap='nowrap'>
    <CardStatistics paperStatistic={classes.paperStatistic}/>
    <Notes paperStatistic={classes.paperStatistic}/>
    <Indications paperStatistic={classes.paperStatistic}/>
  </Grid>
);

export default withStyles(styles)(Statistics);
