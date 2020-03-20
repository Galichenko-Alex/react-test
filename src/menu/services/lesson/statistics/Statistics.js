import React from 'react';
import { withStyles, Grid, Typography } from '@material-ui/core';
import { green } from '@material-ui/core/colors';

const styles = theme => ({
  splitStatistic: {
    display: 'flex',
    flexDirection: 'column',
    gap: '50px',
  },
  statistic: {
    width: '100%',
  },
});

const Statistics = ({classes, paperStatistic}) => (
  <Grid className={classes.splitStatistic} item xs={3}>
    <Grid className={paperStatistic} item xs={12}>
      <table className={classes.statistic}>
        <tbody>
          <tr>
            <td>Throughput</td>
            <td><Typography variant='body2' style={{ color: green[300] }}>{Math.round(Math.random() * 100)}</Typography></td>
            <td><Typography variant='body2' color='primary'>{Math.round(Math.random() * 100)}</Typography></td>
          </tr>
          <tr>
            <td>Errors</td>
            <td>{Math.round(Math.random() * 100)}</td>
          </tr>
          <tr>
            <td>p90</td>
            <td>{Math.random().toFixed(3)}</td>
          </tr>
          <tr>
            <td>p99</td>
            <td>{Math.random().toFixed(3)}</td>
          </tr>
          <tr>
            <td>p75</td>
            <td>{Math.random().toFixed(3)}</td>
          </tr>
          <tr>
            <td>p50</td>
            <td>{Math.random().toFixed(3)}</td>
            <td><Typography variant='body2' color='primary'>{Math.random().toFixed(3)}</Typography></td>
          </tr>
        </tbody>
      </table>
    </Grid>

    <Grid className={paperStatistic} item xs={12}>

    </Grid>
  </Grid>
);

export default withStyles(styles)(Statistics);
