//libs
import React from 'react';

// Components
import SetpointSetterContainer from '../../containers/SetpointSetterContainer';

const AddProcess2 = (props) => {
  let modules = props.modules.map((module,index) => {
    switch (module) {
      case 'SetpointSetter':
        return <SetpointSetterContainer key={index}/>
      default:
        return null
      }
  })
  return (
    <div className="add-process-2">
      {modules}
    </div>
  );
};

AddProcess2.propTypes = {
  modules: React.PropTypes.array,
}

AddProcess2.defaultProps = {
  modules: ['SetpointSetter'],
}

export default AddProcess2;
