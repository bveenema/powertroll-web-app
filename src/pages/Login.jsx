// Libs
import React from 'react';
import Link from 'react-router/lib/Link';

const Login = (props) => {
  let name = props.route.userData.firstName;
  let isLoggedIn = props.route.userData.loggedIn;

  let loggedOutHTML = <p>
                        Hey, we don't recognize you!<br />
                        <Link to="ass">Create an account</Link> or <Link to="ass">login</Link>
                      </p>;
  let loggedInHTML = <p>
                        Welcome back, <em>{name}</em>!<br />
                        <Link to="ass">Login</Link> or <Link to="ass">that's not me</Link>
                      </p>;

  let text = (isLoggedIn) ? loggedInHTML : loggedOutHTML;
  return (
    <div className="pure-g text-align-center">
      <div className="pure-u-1">
        {text}
      </div>
      <div className="pure-u-md-1-6"></div>

    </div>
  );
}

export default Login;
