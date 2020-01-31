import React from 'react';
import PropTypes from 'prop-types';

//  @ Material UI helper
import { makeStyles } from '@material-ui/core/styles';
//  @@ material  UI Core components
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

// @ components

import AccountSettings from './AccountSettings';
//  importing styles
import styles from '../../assets/Styles/components/NavBarStyles';
import Styled from 'styled-components';

//  Initializing Material Styles
const useStyles = makeStyles(styles);

const NavBar = ({ routes }) => {
  const classes = useStyles();
  const pageName = () => {
    let page;
    routes.map((prop) => {
      if (window.location.href.indexOf(prop.layout + prop.path) !== -1) {
        page = prop.name;
      }
      return null;
    });
    return page;
  };

  return (
    <>
      <AppBar className={classes.appbar}>
        <ToolBar>
          <AppContainer>
            <div className={classes.title}>
              <Button>{pageName()}</Button>
            </div>
            <div>
              <AccountSettings />
            </div>
          </AppContainer>
        </ToolBar>
      </AppBar>
    </>
  );
};

//  Styled Components

const AppContainer = Styled.div`
width: 85%;
margin: auto;
display: flex;
justify-content: space-between;

`;

NavBar.prototype = {
  routes: PropTypes.array.isRequired
};

export default NavBar;
