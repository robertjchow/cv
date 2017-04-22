import { Meteor } from 'meteor/meteor';
import ReactDOM from 'react-dom';
import { Tracker } from 'meteor/tracker';
import {routes, onAuthChange}  from '../imports/routes/routes';
import {Accounts} from 'meteor/accounts-base';
import { Router, Route, browserHistory } from 'react-router';




Tracker.autorun(() => {
  const isAuthenticated = !!Meteor.userId();
  onAuthChange(isAuthenticated);
});

Meteor.startup(() => {
  ReactDOM.render(routes, document.getElementById('app'));

});
