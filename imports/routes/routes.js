import { Meteor } from 'meteor/meteor';
import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import {Accounts} from 'meteor/accounts-base';

import Login from '../ui/Login';
import Rsignup from '../ui/Rsignup';
import NotFound from '../ui/NotFound';
import Usignup from '../ui/Usignup';
import Dashboard from '../ui/Dashboard';
import Esignup from '../ui/Esignup';
import ResetPwd from '../ui/ResetPwd';
import NewPassword from '../ui/NewPassword';

const unauthenticatedPages = ['/', '/signup','/forgotpwd','/user/signup','recruiter/signup','/resetpassword/'];
const authenticatedPages = ['/dashboard'];

const onEnterPublicPage = () => {
  if (Meteor.userId()) {
    browserHistory.replace('/dashboard');
  }
};
const onEnterPrivatePage = () => {
  if (!Meteor.userId()) {
    browserHistory.replace('/');
  }
};
export const onAuthChange = (isAuthenticated) => {
  const pathname = browserHistory.getCurrentLocation().pathname;
  const isUnauthenticatedPage = unauthenticatedPages.includes(pathname);
  const isAuthenticatedPage = authenticatedPages.includes(pathname);

  if (isUnauthenticatedPage && isAuthenticated) {
    browserHistory.replace('/dashboard');
  } else if (isAuthenticatedPage && !isAuthenticated) {
    browserHistory.replace('/');
  }
};
export const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={Login}/>
    <Route path="/forgotpwd" component={ResetPwd}/>
    <Route path="/signup" component={Rsignup}/>
    <Route path="/user/signup" component={Usignup}/>
    <Route path="/recruiter/signup" component={Esignup}/>
    <Route path="/resetpassword/:token"  component={NewPassword}/>
    <Route path="/dashboard" component={Dashboard}/>
    <Route path="*" component={NotFound}/>
  </Router>
);
