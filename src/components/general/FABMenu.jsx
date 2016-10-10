// Libs
import React, {Component} from 'react';

// Material UI Components
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

// Styles
const styles = {
  fabMenuStyle: {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
  },
  listStyle: {
    listStyle: 'none',
    textAlign: 'right',
    marginBottom: '60px',
  },
  listElement: {
  },
  fabStyle: {
    position: 'absolute',
    right: '0px',
    bottom: '0px',
  }
};

class FABMenu extends Component {
  constructor(props){
    super(props);
    this.state = {
      expanded: props.initiallyExpanded,
    };
    this.handleExpandChange = this.handleExpandChange.bind(this);
    this.childArray = [];
    this.prepChildren();
  }

  prepChildren() {
    if(!Array.isArray(this.props.children)){
      console.log('children is string');
      this.childArray.push(this.props.children);
    }else{
      this.childArray = this.props.children;
    }
  }

  handleExpandChange() {
    this.setState({expanded: !this.state.expanded});
  }

  render() {
    let preppedChildren = this.childArray.map((child,index) => {
      return (
        <li style={styles.listElement} key={index}>
          {child}
        </li>
      )
    });
    return (
      <div style={styles.fabMenuStyle}>
        <div className="FABMenuItems" hidden={!this.state.expanded}>
          <ul style={styles.listStyle}>
            {preppedChildren}
          </ul>
        </div>
        <FloatingActionButton
          style={styles.fabStyle}
          secondary={true}
          onClick={this.handleExpandChange}>
          <ContentAdd />
        </FloatingActionButton>
      </div>
    );
  }
}

FABMenu.propTypes = {
  initiallyExpanded: React.PropTypes.bool,
};

FABMenu.defaultProps = {
  initiallyExpanded: true,
};

export default FABMenu;
