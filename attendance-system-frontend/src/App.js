import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import HomePage from './components/HomePage';
import Login from './components/Login';
import DashboardSelection from './components/DashboardSelection';
import AdminDashboard from './components/admin/AdminDashboard';
import UserDashboard from './components/user/UserDashboard';
import Reports from './components/Reports';
import PrivateRoute from './components/PrivateRoute';

const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/login" component={Login} />
          <PrivateRoute path="/dashboard" component={DashboardSelection} />
          <PrivateRoute path="/admin" exact component={AdminDashboard} role="admin" />
          <PrivateRoute path="/user" component={UserDashboard} role="user" />
          <PrivateRoute path="/reports" component={Reports} role="admin" />
          <Redirect to="/" />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;


