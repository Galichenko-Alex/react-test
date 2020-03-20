import React from 'react';
import classNames from 'classnames';
import { withStyles, Grid, TextField, Typography } from '@material-ui/core';

const styles = theme => ({
  incidents: {
    padding: theme.spacing(2),
  },
  incidentsText: {
    background: '#ffffff',
  },
});

const Indications = ({classes, paperStatistic}) => (
  <Grid className={classNames(paperStatistic, classes.incidents)} item xs={3}>
    <Typography variant='subtitle2'>Incidents</Typography>
    <TextField className={classes.incidentsText} type='textarea' variant='outlined'/>
  </Grid>
);

export default withStyles(styles)(Indications);
