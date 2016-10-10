// unfinished/src/components/data-circles.jsx
import React from 'react';
import {isoParse} from 'd3';

const renderCircles = (props) => {
  // Styles
  const dataCircleStyle = {
    stroke: `rgba(${props.color[0]},${props.color[1]},${props.color[2]},1)`,
    fill: `rgba(${props.color[0]},${props.color[1]},${props.color[2]},0.5)`,
    strokeWidth: '1',
  };
  return (coords, index) => {
    const circleProps = {
      cx: props.xScale(isoParse(coords.date)),
      cy: props.yScale(coords.value),
      r: 4,
      key: index
    };
    return <circle {...circleProps} style={dataCircleStyle}/>;
  };
};

const DataCircles = (props) => {
  return <g>{ props.data.map(renderCircles(props)) }</g>
}

DataCircles.propTypes = {
  xScale: React.PropTypes.func.isRequired,
  yScale: React.PropTypes.func.isRequired,
  data: React.PropTypes.arrayOf(React.PropTypes.shape({
    date: React.PropTypes.string.isRequired,
    value: React.PropTypes.number.isRequired,
  })).isRequired,
  color: React.PropTypes.array,
}

DataCircles.defaultProps = {
  color: [0,0,0],
}

export default DataCircles;
