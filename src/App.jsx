// Libs
import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

//Remove once "official version" of React is release... (http://www.material-ui.com/#/get-started/installation)
  import injectTapEventPlugin from 'react-tap-event-plugin';
  // Needed for onTouchTap
  // http://stackoverflow.com/a/34015469/988941
  injectTapEventPlugin();

// src Components
import Header from './components/header/Header';

// Styles
const styles= {
  appWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minWidth: '300px',
  },
  header: {
    width: '100%',
    position: 'fixed',
    zIndex: '5',
  },
  pageWrapper: {
    margin: '70px 10px 10px 10px',
    maxWidth: '1024px',
    width: '95%',
  }
}


class App extends Component {
  render() {
    let userData = this.props.route.userData;
    return (
      <MuiThemeProvider>
        <div className="App" style={styles.appWrapper}>
          <Header loggedIn={userData.loggedIn} style={styles.header}/>
            <div className="pure-g" style={styles.pageWrapper}>
              {this.props.children}
            </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
