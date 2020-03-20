import React from 'react';
import { withStyles, Grid, List, ListItem, Typography } from '@material-ui/core';
import { CheckCircleOutline, RadioButtonUnchecked } from '@material-ui/icons';
import { green, orange, red } from '@material-ui/core/colors';

const styles = () => ({
  notes: {
    alignItems: 'end',
  },
});

const Notes = ({classes, paperStatistic}) => (
  <Grid className={paperStatistic} item xs={6}>
    <List>
      <ListItem className={classes.notes}>
        <CheckCircleOutline style={{ color: green[300] }}/>
        <Typography variant='body2'>Skew between bot vs real load</Typography>
      </ListItem>
      <ListItem className={classes.notes}>
        <RadioButtonUnchecked style={{ color: orange[800] }} color='primary'/>
        <Typography variant='body2'>Failed requests are retried</Typography>
      </ListItem>
      <ListItem className={classes.notes}>
        <CheckCircleOutline style={{ color: red[500] }} color='secondary'/>
      </ListItem>
    </List>
  </Grid>
);

export default withStyles(styles)(Notes);
