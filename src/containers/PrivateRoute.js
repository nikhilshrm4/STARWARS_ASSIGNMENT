import React from 'react';
import {
  Route,
  Redirect,
  withRouter
} from 'react-router-dom';
import { connect } from 'react-redux';

const PrivateRoute = ({ component: Component, isLoggedIn, ...rest }) => (
  <Route {...rest} render={props => (
    isLoggedIn ? (
      <Component {...props}/>
    ) : (
      <Redirect to={{
        pathname: '/login',
        state: { from: props.location }
      }}/>
    )
  )}/>
)

const mapStateToProps = state => {
    const { isLoggedIn } = state;
    return {
        isLoggedIn
    }
}

export default withRouter(connect(mapStateToProps)(PrivateRoute))
