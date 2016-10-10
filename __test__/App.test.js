import React from 'react';
import ReactDOM from 'react-dom';
import App from '../src/App';

let userData = {userData:{
  loggedIn: true,
  firstName: "Ben",
  lastName: "Veenema",
  _id: 4141123456789123456789123,
}};

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App route={userData} />, div);
});
