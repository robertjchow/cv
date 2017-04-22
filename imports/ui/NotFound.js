import React from 'react';
import {Link} from 'react-router';

export default class NotFound extends React.Component {
    render() {
        return (
            <div>
                <h1>404 - Page Not Found</h1>
                <p>We are unable to find that page.</p>
                <Link to="/">HEAD HOME</Link>
            </div>
        );
    }
}
