import React from 'react';
import {Link} from 'react-router';

export default class Rsignup extends React.Component {
    render() {
        return (
            <div className="box-view flex">
              <div className="boxed-view">
                <Link className="btn " to="user/signup">Jobseeker</Link>
                <Link className="btn " to="recruiter/signup">Recruiter</Link>
              </div>
            </div>
        );
    }
}
