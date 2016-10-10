// Libs
import React, {Component} from 'react';
import {browserHistory} from 'react-router';

// Components
import Process from '../components/processes/Process';
import FABMenu from '../components/general/FABMenu';
import FABMenuItem from '../components/general/FABMenuItem';

// Data
import userProcesses from '../data/userProcesses';

// styles
const styles = {
  processWrapper: {
    marginBottom: '15px',
  },
};


class Processes extends Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(url) {
    browserHistory.push(url);
  }

  render() {
    let processes = userProcesses.map((process, index) =>{
      let initiallyExpanded = (index === 0) ? true : false;
      return (
        <Process data={process} initiallyExpanded={initiallyExpanded} style={styles.processWrapper} key={index}/>
      )
    });

    return (
        <div className="pure-u-1">
          {processes}
          <FABMenu initiallyExpanded={false}>
            <FABMenuItem text="Add Process" url="/add/process" handleClick={this.handleClick}/>
            <FABMenuItem text="Add Troll" url="/add/troll" handleClick={this.handleClick}/>
            <FABMenuItem text="Add Candy" url="/add/candy" handleClick={this.handleClick}/>
          </FABMenu>
        </div>
    );
  }
}

export default Processes;
