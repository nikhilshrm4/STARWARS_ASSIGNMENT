import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import { NotificationContainer } from 'react-notifications';
import PrivateRoute from './PrivateRoute';
import Login from './LoginPage';
import Home from './HomePage';
import 'react-notifications/lib/notifications.css';

const App = () => (
  <Router>
    <div className="app-wrapper">
      <Switch>
        <Route path="/login" component={Login}/>
        <PrivateRoute path="/home" component={Home}/>
        <Route component={Login}/>
      </Switch>
      <NotificationContainer/>
    </div>
  </Router>
)

export default App;
