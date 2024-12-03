import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, role, ...rest }) => (
  <Route
    {...rest}
    render={(props) => {
      const user = JSON.parse(localStorage.getItem('user'));
      if (!user) {
        return <Redirect to="/" />;
      }

      if (role && user.role !== role) {
        return <Redirect to={user.role === 'admin' ? '/admin' : '/user'} />;
      }

      return <Component {...props} />;
    }}
  />
);

export default PrivateRoute;


