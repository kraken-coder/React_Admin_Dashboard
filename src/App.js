import React from 'react';

// Imports
import { Router, Route, Switch, Redirect } from 'react-router-dom';
// import external styles
import { backgroundColor } from './Utils/Colors';
import './assets/MainStyles.css';
//  Importing Components
import Admin from './views/Admin';
import { createBrowserHistory } from 'history';

const App = () => {
  const hist = createBrowserHistory();
  return (
    <div
      style={{
        backgroundColor: backgroundColor(50)
      }}
    >
      <Router history={hist}>
        <Switch>
          <Route path='/admin' component={Admin} />
          <Redirect from='/' to='/admin/dashboard' />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
