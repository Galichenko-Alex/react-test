import React from 'react';
import { withStyles, Select, MenuItem } from '@material-ui/core';

const styles = () => ({
  method: {
    background: '#f2f2f2',
    height: 40,
  }
});

const Rest = ({classes}) => (
  <React.Fragment>
    <Select
      name='method'
      value='get'
      variant='outlined'
      className={classes.method}
    >
      <MenuItem value='get'>GET /3.1/lesson</MenuItem>
      <MenuItem value='post'>POST /3.1/lesson</MenuItem>
      <MenuItem value='put'>PUT /3.1/lesson</MenuItem>
      <MenuItem value='patch'>PATCH /3.1/lesson</MenuItem>
    </Select>
  </React.Fragment>
);

export default withStyles(styles)(Rest);
