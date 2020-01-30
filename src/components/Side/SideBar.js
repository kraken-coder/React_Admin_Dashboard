import React from 'react';
import PropTypes from 'prop-types';

import { NavLink } from 'react-router-dom';
// Importing Material UI helper
// import Hidden from '@material-ui/core/Hidden';
import { makeStyles } from '@material-ui/core/styles';
//   importing core material UI
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Icon from '@material-ui/core/Icon';
//  importing styling
import styles from '../../assets/Styles/components/SideBarStyles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import Button from '@material-ui/core/Button';
const useStyles = makeStyles(styles);

const SideBar = ({ routes, img }) => {
  const classes = useStyles();
  const activeRoute = (routeName) => {
    return window.location.href.indexOf(routeName) > -1 ? true : false;
  };

  const color = '#fefefe';

  const links = (
    <List className={classes.list}>
      {routes.map((props, key) => {
        return (
          <NavLink
            to={props.layout + props.path}
            className={classes.navLink}
            active='active'
            key={key}
          >
            <ListItem
              button
              className={
                activeRoute(props.layout + props.path)
                  ? classes.activelistItem
                  : classes.listItem
              }
            >
              {typeof props.icon === 'string' ? (
                <Icon>{props.icon}</Icon>
              ) : (
                <props.icon className={classes.icon} />
              )}
              <ListItemText
                primary={props.name}
                classnames={classes.listText}
              />
            </ListItem>
          </NavLink>
        );
      })}
    </List>
  );

  const info = (
    <div className={classes.topInfo}>
      <div className={classes.topInfoItem}>
        <h3>Main Office</h3>{' '}
        <Button>
          <ExpandMoreIcon style={{ color: 'white', fontSize: '35px' }} />
        </Button>
      </div>
    </div>
  );

  return (
    <>
      {/* <Hidden mdUp implentation='css'>
        <Drawer></Drawer>
      </Hidden> */}

      <Drawer
        variant='permanent'
        anchor='left'
        className={classes.drawer}
        classes={{
          paper: classes.drawerPaper
        }}
        elevation={56}
      >
        {info}
        <Divider
          style={{
            boxShadow: `2px 2px 2px ${color}`
          }}
        />
        <div className={classes.toolbar} />
        <div className={classes.background}>
          <div className={classes.listwrapper}>{links}</div>
        </div>
        <Divider />
      </Drawer>
    </>
  );
};

SideBar.prototype = {
  routes: PropTypes.array.isRequired
};
export default SideBar;
