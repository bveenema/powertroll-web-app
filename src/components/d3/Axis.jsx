// unfinished/src/components/x-y-axis.jsx
import React, {Component} from 'react';
import {axisBottom, axisLeft, select} from 'd3';

class Axis extends Component {
  componentDidMount() {
    this.renderAxis();
  }

  componentDidUpdate() {
    this.renderAxis();
  }

  renderAxis() {
    var node  = this.refs.axis;
    let axis;
    if(this.props.orient === 'bottom'){
      axis = axisBottom(this.props.scale).ticks(5);
    }
    if(this.props.orient === 'left'){
      axis = axisLeft(this.props.scale).ticks(5);
    }
    select(node).call(axis);
  }

  render() {
    return <g className="axis" ref="axis" transform={this.props.translate}></g>
  }
}

export default Axis;
