import React from 'react';
import {withStyles} from "@material-ui/core";
import {CircularProgress} from "@material-ui/core";

const styles = () => ({
  loader: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    margin: 'auto'
  },
});

const Loader = ({classes}) => (
  <CircularProgress className={classes.loader} size={150}/>
);

export default withStyles(styles)(Loader);
