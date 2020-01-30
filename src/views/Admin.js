import React, { useEffect, createRef } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

//  importing material UI Helpers
import CssBaseLine from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
//  importing core components
import NavBar from '../components/NavBar/NavBar';
import SideBar from '../components/Side/SideBar';

//  importing Perfect
import PerfectScrollbar from 'perfect-scrollbar';
import 'perfect-scrollbar/css/perfect-scrollbar.css';
//  importing Routes
import routes from '../routes';
// importing styling
import styles from '../assets/Styles/Layouts/adminstyles';

const useStyles = makeStyles(styles);
let ps;

//  Getting All Routes
const allRoutes = (
  <Switch>
    {routes.map((props, key) => {
      return (
        <Route
          key={key}
          path={props.layout + props.path}
          component={props.component}
        />
      );
    })}
    <Redirect from='/admin' to='/admin/dashboard' />
  </Switch>
);
const Admin = () => {
  const classes = useStyles();

  //  initializing ref from perfect scrollbar
  const panel = createRef();

  useEffect(() => {
    if (navigator.platform.indexOf('Win') > -1) {
      ps = new PerfectScrollbar(panel.current, {
        suppressScrollX: true,
        suppressScrollY: false
      });
      document.body.style.overflow = 'hidden';
    }
    // Specify how to clean up after this effect:
    return function cleanup() {
      if (navigator.platform.indexOf('Win') > -1) {
        ps.destroy();
      }
    };
  }, [panel]);
  return (
    <div className={classes.wrapper}>
      <CssBaseLine />
      <SideBar routes={routes} />
      <div className={classes.mainPanel} ref={panel}>
        <NavBar routes={routes} />
        <div className={classes.content}>
          <div className={classes.container}> {allRoutes} </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
