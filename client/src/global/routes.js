import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import App from '../App'
import Create from '../pages/Create'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Nav from '../components/Nav'
import PrivateRoute from './PrivateRoute'

const Routes = () => (
  <BrowserRouter>
    <Nav />
    <Switch>
      <Route path="/" exact component={App} />
      <PrivateRoute path="/create" exact component={Create} />
      <Route path="/register" exact component={Register} />
      <Route path="/login" exact component={Login} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
