// Libs
import React from 'react';
import {line, isoParse, curveMonotoneX, curveStepAfter} from 'd3';

const renderLine = (props) => {
  // Styles
  const dataLineStyle = {
    stroke: `rgba(${props.color[0]},${props.color[1]},${props.color[2]},0.8)`,
    fill: 'none',
    strokeWidth: '3',
  };

  const dataLine = line(props.data)
                    .x(function(d) { return props.xScale(isoParse(d.date)); })
                    .y(function(d) { return props.yScale(d.value); })
  if(props.type === 'boolean'){
    dataLine.curve(curveStepAfter);
  }else {
    dataLine.curve(curveMonotoneX);
  }



  return <path d={dataLine(props.data)} style={dataLineStyle}/>;
};


const DataLine = (props) => {
  return(
    <g className="data-line">{renderLine(props)}</g>
  );
}

DataLine.propTypes = {
  xScale: React.PropTypes.func.isRequired,
  yScale: React.PropTypes.func.isRequired,
  data: React.PropTypes.arrayOf(React.PropTypes.shape({
    date: React.PropTypes.string.isRequired,
    value: React.PropTypes.number.isRequired,
  })).isRequired,
  color: React.PropTypes.array,
}

DataLine.defaultProps = {
  color: [0,0,0],
}

export default DataLine;
