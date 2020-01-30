import React, { useState } from 'react';

// @@material  UI core components
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Avatar from '@material-ui/core/Avatar';
import Typnography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import TextField from '@material-ui/core/TextField';

//  @material Icons
import NotificationsIcon from '@material-ui/icons/Notifications';
import SearchIcon from '@material-ui/icons/Search';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
//  @@ material UI helpers
import { makeStyles } from '@material-ui/core';
import styles from '../../assets/Styles/components/AccountSetting';
import Styled from 'styled-components';

const useStyles = makeStyles(styles);
const AccountSettings = () => {
  const classes = useStyles();

  const [anchor, setAnchor] = useState(null);

  const handleClick = (e) => {
    setAnchor(e.currentTarget);
  };
  const handleClose = (e) => {
    setAnchor(null);
  };

  return (
    <>
      <Container>
        <div className={classes.containerItem}>
          <SearchIcon className={classes.searchIcon} />
          <TextField placeholder='Search' className={classes.search} />
        </div>
        <div className={classes.containerItem}>
          <Button>
            <Typnography
              variant='body1'
              component='h6'
              className={classes.title}
            >
              Karen White
            </Typnography>{' '}
            <ExpandMoreIcon
              aria-controls='account-menu'
              aria-haspopup='true'
              onClick={handleClick}
            />
          </Button>

          <Menu
            id='account-menu'
            anchorEl={anchor}
            keepMounted
            open={Boolean(anchor)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu>
        </div>
        <div className={classes.containerItem}>
          <Badge badgeContent={5} color='primary'>
            <NotificationsIcon className={classes.notificationIcon} />
          </Badge>
        </div>
      </Container>
    </>
  );
};

const Container = Styled.div`
display: flex;
justify-content: space-between;
align-items: center;

`;

export default AccountSettings;
