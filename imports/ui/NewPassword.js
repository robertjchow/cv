import React from 'react';
import {Link} from 'react-router';
import { Router, Route, browserHistory } from 'react-router';
import {Accounts} from 'meteor/accounts-base';
import {Meteor} from 'meteor/meteor';

export default class NewPassword extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: ''
        };
    }
    onSubmit(e) {
        e.preventDefault();
        let rpwd = this.refs.resetpwd.value.trim();
        let cpwd = this.refs.confirmpwd.value.trim();
        if(rpwd === cpwd){
            Accounts.resetPassword(browserHistory.getCurrentLocation().pathname.slice(browserHistory.getCurrentLocation().pathname.lastIndexOf('/')+1),rpwd,(err) => {
                if (err) {
                    this.setState({error: 'Unable to reset your password.'});
                    console.log(err);
                } else {
                    this.setState({error: ''});
                    browserHistory.replace('/');
                    console.log('success');
                }
            });
        }else{
            this.setState({error: 'Passwords did not match.'});
        }
        console.log(Accounts._resetPasswordToken);
        console.log(browserHistory.getCurrentLocation().pathname.slice(browserHistory.getCurrentLocation().pathname.lastIndexOf('/')+1,browserHistory.getCurrentLocation().pathname.lastIndexOf('/')+40));
    }
render() {
    return (
        <div className="box-view">
            <div className="login">
                {this.state.error ? <p>{this.state.error}</p> : undefined}
                <form onSubmit={this.onSubmit.bind(this)} noValidate className="boxed-view__form">
                    <input type="password" ref="resetpwd" name="resetpwd" placeholder="Password"/>
                    <input type="password" ref="confirmpwd" name="confirmpwd" placeholder="Confirm Password"/>
                    <button className="btn">Reset Password</button>
                </form>
            </div>
        </div>
    );
}
}
