import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { CssBaseline, Drawer } from '@material-ui/core';

import DrawerList from './DrawerList';
import classNames from 'classnames';

const drawerWidth = 240;
const styles = theme => ({
  root: {
    display: 'flex',
    background: '#ffffff'
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
    background: '#e5eef5',
    border: 'none',
  },
  content: {
    display: 'flex',
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
});

const Wrapper = ({ classes, children }) => (
  <div className={classes.root}>
    <CssBaseline/>
    <Drawer
      variant="permanent"
      className={classNames(classes.drawer, classes.drawerClose)}
      classes={{
        paper: classes.drawerClose,
      }}
    >
      <DrawerList/>
    </Drawer>
    <main className={classes.content}>
      {children}
    </main>
  </div>
);

export default withStyles(styles)(Wrapper);
