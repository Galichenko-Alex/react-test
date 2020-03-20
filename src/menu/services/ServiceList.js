import React from 'react';
import {
  withStyles,
  List,
  ListItem,
  ListItemText,
  Typography,
  TextField,
} from '@material-ui/core'
import { AddCircle } from '@material-ui/icons';
import {Link as RouteLink} from 'react-router-dom';
import classNames from 'classnames';

const styles = theme => ({
  title: {
    padding: `${theme.spacing(1)}px ${theme.spacing(2)}px`,
  },
  toolbar: theme.mixins.toolbar,
  links: {
    justifyContent: 'center',
    color: 'inherit',
    '&:hover': {
      color: 'inherit'
    },
    paddingTop: 0,
    paddingBottom: 0,
  },
  bottomMenus: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    width: '100%'
  },
  textWithIcon: {
    '& > span': {
      display: 'flex',
      gap: '5px',
    }
  },
  searchWrapper: {
    padding: `0 ${theme.spacing(2)}px`
  },
  search: {
    background: '#ffffff'
  },
  active: {
    background: '#baf2ce'
  },
});

const ServicesList = ({classes}) => (
  <React.Fragment>
    <Typography className={classes.title} variant='body1'>Services</Typography>
    <div className={classes.searchWrapper}>
      <TextField className={classes.search} variant='outlined' margin='dense' label='Search'/>
    </div>
    <List>
      <ListItem
        component={RouteLink}
        to='/services/lesson'
        color='primary'
        className={classes.links}
      >
        <ListItemText primary='Lesson'/>
      </ListItem>
      <ListItem
        component={RouteLink}
        to='/services/mcq'
        color='primary'
        className={classes.links}
      >
        <ListItemText primary='MCQ'/>
      </ListItem>
      <ListItem
        component={RouteLink}
        to='/services/pvpb'
        color='primary'
        className={classes.links}
      >
        <ListItemText primary='PVPB'/>
      </ListItem>
      <ListItem
        component={RouteLink}
        to='/services/users'
        color='primary'
        className={classes.links}
      >
        <ListItemText primary='Users'/>
      </ListItem>
      <ListItem
        component={RouteLink}
        to='/services/coupon'
        color='primary'
        className={classes.links}
      >
        <ListItemText primary='Coupon'/>
      </ListItem>
      <ListItem
        component={RouteLink}
        to='/services/token'
        color='primary'
        className={classes.links}
      >
        <ListItemText primary='Token'/>
      </ListItem>
      <ListItem
        component={RouteLink}
        to='/services/add'
        color='primary'
        className={classes.links}
      >
        <ListItemText className={classes.textWithIcon} primary={
          <React.Fragment>
            <AddCircle/>Add service
          </React.Fragment>
        }/>
      </ListItem>
    </List>
  </React.Fragment>
);

export default withStyles(styles)(ServicesList);
