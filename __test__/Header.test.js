import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../src/components/header/Header';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MuiThemeProvider><Header /></MuiThemeProvider>, div);
});
