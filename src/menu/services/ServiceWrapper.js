import React from 'react';
import { withStyles, Drawer } from '@material-ui/core';
import ServiceList from './ServiceList';

const drawerWidth = 150;
const styles = theme => ({
  root: {
    display: 'flex',
  },
  drawerOpen: {
    left: 73,
    height: '100%',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    background: '#f4f4f4',
    border: 'none',
  },
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
});

const ServicesWrapper = ({classes, children}) => (
  <React.Fragment>
    <Drawer
      variant="permanent"
      className={classes.drawerOpen}
      classes={{
        paper: classes.drawerOpen,
      }}
    >
      <ServiceList/>
    </Drawer>
    <main className={classes.content}>
      {children}
    </main>
  </React.Fragment>
);

export default withStyles(styles)(ServicesWrapper);
