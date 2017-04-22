import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
  Accounts.urls.resetPassword = function (token) {
      return Meteor.absoluteUrl('resetpassword/' + token);
  };

});
