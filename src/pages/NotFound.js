import React from 'react';

import AlertErrorOutline from 'material-ui/svg-icons/alert/error-outline';

const NotFound = () => (
  <div className="pure-u-1 text-align-center">
    <AlertErrorOutline />
    <h2>Page Not Found</h2>
  </div>
);

export default NotFound;
