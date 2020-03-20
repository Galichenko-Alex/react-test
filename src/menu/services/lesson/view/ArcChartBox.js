import React from 'react';
import {
  withStyles,
  Paper
} from '@material-ui/core';
import Graph from './Graph';
import Rest from './Rest';

const styles = theme => ({
  arcChartBox: {
    height: '100%',
    background: '#fbfbfb',
    borderRadius: 0,
    boxShadow: 'none',
    padding: theme.spacing(3),
    display: 'flex',
    flexDirection: 'column'
  }
});

const ArcChartBox = ({classes}) => (
  <Paper className={classes.arcChartBox}>
    <Graph/>
    <Rest/>
  </Paper>
);

export default withStyles(styles)(ArcChartBox);
