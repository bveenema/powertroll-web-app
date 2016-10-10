//libs
import React, { Component } from 'react';

//Component
class InputWrapper extends Component {
  constructor(props){
    super(props)
    this.state = {
      value: this.props.initialValue,
    }
    this.modifiedChildren = [];
    this.handleChange = this.handleChange.bind(this);
    this.renderChildProps = this.renderChildProps.bind(this);
  }

  renderChildProps(props){
    return React.Children.map(props.children, child => {
      if(child.type.name === "TextField"){
        return React.cloneElement(child, {onChange: this.handleChange, value: this.state.value})
      }else{
        return child;
      }
    });
  }

  handleChange(event, value) {
    if(this.props.onChange){
      this.props.onChange(event,value,this.props.id);
    }
    this.setState({value: value});
  }

  render(){
    return(
      <div style={{width: '100%'}}>
        {this.renderChildProps(this.props)}
      </div>
    );
  };
}

InputWrapper.propTypes = {
  onChange: React.PropTypes.func,
  id: React.PropTypes.string,
  initialValue: React.PropTypes.string,
}

export default InputWrapper;
