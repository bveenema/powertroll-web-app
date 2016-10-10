// Libs
import React from 'react';

// Material UI Components
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';


// Styles
const styles = {
  item: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    margin: '4px 8px'
  },
  text: {
    marginRight: '10px',
    padding: '2px',
    backgroundColor: 'rgba(0,0,0,0.65)',
    color: 'rgba(255,255,255,1)',
  },
}

const FABMenuItem = (props) => {
  return (
    <div style={styles.item} onClick={() => props.handleClick(props.url)}>
      <div style={styles.text}>{props.text}</div>
      <FloatingActionButton mini={true} secondary={true}>
        <ContentAdd />
      </FloatingActionButton>
    </div>
  );
};

FABMenuItem.propTypes = {
  url: React.PropTypes.string,
  text: React.PropTypes.string,
  handleClick: React.PropTypes.func,
}

FABMenuItem.defaultProps = {
  text: 'Menu Item Text',
}

export default FABMenuItem;
