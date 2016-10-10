// libs
import React, { Component } from 'react';
import {zip} from 'lodash';

// Material-UI Components
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

// Component
class SelectFieldWrapper extends Component {
  constructor(props){
    super(props)
    this.state = {
      value: (props.initialValue) ? props.initialValue : null,
    }
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.initialValue != null) {
      this.setState({
        value: (nextProps.initialValue) ? nextProps.initialValue : null,
      });
    }
  }


  handleChange(event, index, value) {
    if(this.props.handleChange){
      this.props.handleChange(event,value,this.props.id);
    }
    this.setState({value: value});
  }

  render() {
    // Combine values and texts
    let items = zip(this.props.values,this.props.texts);
    // Generate Menu Items
    let menuItems = items.map((item,index) => {
      return(
        <MenuItem value={item[0]} primaryText={item[1]} key={index}/>
      )
    });
    return(
      <SelectField
        id="template"
        floatingLabelText={this.props.floatingLabelText}
        value={this.state.value}
        onChange={this.handleChange}
        disabled={this.props.disabled}
        className={this.props.className}
        style={this.props.style}
      >
        {menuItems}
      </SelectField>

    )
  }
}

SelectFieldWrapper.propTypes = {
  values: React.PropTypes.array.isRequired,
  texts: React.PropTypes.array.isRequired,
  initialValue: React.PropTypes.string,
  id: React.PropTypes.string,
  disable: React.PropTypes.bool,
  handleChange: React.PropTypes.func,
}

SelectFieldWrapper.defaultProps = {
  floatingLabelText: ' ',
  id: 'default',
}

export default SelectFieldWrapper;
