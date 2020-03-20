import React from 'react';
import {
  withStyles,
  List,
  ListItem,
} from '@material-ui/core'
import {
  Dashboard,
  Star,
  Folder,
} from '@material-ui/icons'
import {Link as RouteLink} from 'react-router-dom'
import { history } from '../helper';

const styles = theme => ({
  toolbar: theme.mixins.toolbar,
  links: {
    justifyContent: 'center',
    color: 'inherit',
    '&:hover': {
      color: 'inherit'
    }
  },
  bottomMenus: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    width: '100%'
  }
});

const isActiveMenu = (point) => history.location.pathname.split('/').includes(point) ? 'primary' : 'action';

const DrawerList = ({classes}) => (
  <List>
    <ListItem component={RouteLink} to='/dashboard' color='primary' className={classes.links}>
      <Dashboard color={isActiveMenu('dashboard')} fontSize='large'/>
    </ListItem>
    <ListItem component={RouteLink} to='/services' color='primary' className={classes.links}>
      <Star color={isActiveMenu('services')} fontSize='large'/>
    </ListItem>
    <ListItem component={RouteLink} to='/box' color='primary' className={classes.links}>
      <Folder color={isActiveMenu('box')} fontSize='large'/>
    </ListItem>
  </List>
);

export default withStyles(styles)(DrawerList);
