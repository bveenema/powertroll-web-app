// Libs
import React, { Component } from 'react';
import { browserHistory } from 'react-router';


// Components
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';
import TrollIcon from '../TrollIcon';
import MenuDrawer from './MenuDrawer';



class Header extends Component {
  constructor(props){
    super(props);
    this.state = {open: false};
  }

  handleToggle = () => this.setState({open: !this.state.open});

  handleClose = (url) => {
    this.setState({open: false});
    browserHistory.push(url)
  }

  render() {
    return (
      <div className="Header" style={this.props.style}>
        <AppBar
          title="PowerTroll"
          style={this.titleStyle}
          iconElementLeft={<IconButton><TrollIcon /></IconButton>}
          iconElementRight={<IconButton onTouchTap={this.handleToggle} ><NavigationMenu /></IconButton>}
        />
        <MenuDrawer
          docked={false}
          width={200}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}
          openSecondary={true}
          handleClick={this.handleClose}
          loggedIn={this.props.loggedIn}
        />
      </div>
    );
  }
}

export default Header;
