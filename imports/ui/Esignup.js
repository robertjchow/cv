import React from 'react';
import {Link} from 'react-router';
import {Accounts} from 'meteor/accounts-base';
import {Meteor} from 'meteor/meteor';

export default class ESignup extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          error: ''
      };

  }
  onSubmit(e) {
      e.preventDefault();
      let fname = this.refs.fname.value.trim();
      let lname = this.refs.lname.value.trim();
      let email = this.refs.email.value.trim();
      let password = this.refs.password.value.trim();
      if (password.length < 5) {
          return this.setState({error: 'Password be at least 6 characters.'})
      }
      Accounts.createUser({email, password, profile:{fname,lname}  }, (err) => {
          if (err) {
              this.setState({error: err.reason});
          } else {
              this.setState({error: ''})
              Roles.addUsersToRoles(Meteor.userId(), 'Recruiter');
          }
      });
}
    render() {
        return (
            <div className="box-view">
                <div className="login">
                    <h1>Recruiter</h1>
                    {this.state.error ? <p>{this.state.error}</p> : undefined}
                    <form onSubmit={this.onSubmit.bind(this)} noValidate className="boxed-view__form">
                        <div className="name">
                            <input type="text" ref="fname" name="fname" placeholder="First Name"/>
                            <input type="text" ref="lname" name="lname" placeholder="Last Name"/>
                        </div>
                        <input type="email" ref="email" name="email" placeholder="Email"/>
                        <input type="password" ref="password" name="password" placeholder="Password"/>
                        <button className="btn">Create Account</button>
                    </form>

                    <Link to="/">Have an account?</Link>
                </div>
            </div>

        );
    }
}
