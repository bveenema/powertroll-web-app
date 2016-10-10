// Libs
import React from 'react';

// Components
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

// data
import LinkList from '../../data/links'

const MenuDrawer = (props) => {
  let loggedInLinks = LinkList.knownUser.map((link) => {
    return (
      <MenuItem onClick={() => props.handleClick(link.url)} key={link.id}>{link.text}</MenuItem>
    );
  });
  let loggedOutLinks = LinkList.unknownUser.map((link) => {
    return (
      <MenuItem onClick={() => props.handleClick(link.url)} key={link.id}>{link.text}</MenuItem>
    );
  });
  let links = (props.loggedIn) ? loggedInLinks : loggedOutLinks;
  return (
    <Drawer {...props}>
      {links}
    </Drawer>
  )
};

export default MenuDrawer;
