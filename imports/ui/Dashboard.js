import React from 'react';
import {Link} from 'react-router';
import { Accounts } from 'meteor/accounts-base';

export default class Dashboard extends React.Component {
    render() {
        return (
            <div>
                <h1>Welcome to dashboard</h1>
                  <button className="btn button--link-text" onClick={() => Accounts.logout()}>Logout</button>
            </div>
        );
    }
}
