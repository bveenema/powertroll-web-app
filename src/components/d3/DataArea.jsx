// Libs
import React from 'react';
import {isoParse, curveMonotoneX, curveStepAfter, area} from 'd3';

const renderArea = (props) => {
  // Styles
  const dataAreaStyle = {
    stroke: 'none',
    fill: `rgba(${props.color[0]},${props.color[1]},${props.color[2]},0.2)`,
  };

  const dataArea = area(props.data)
                    .x(function(d) { return props.xScale(isoParse(d.date)); })
                    .y0(props.height)
                    .y1(function(d) { return props.yScale(d.value); });

  if(props.type === 'boolean'){
    dataArea.curve(curveStepAfter);
  }else {
    dataArea.curve(curveMonotoneX);
  }



  return <path d={dataArea(props.data)} style={dataAreaStyle}/>;
};


const DataArea = (props) => {
  return(
    <g className="data-line">{renderArea(props)}</g>
  );
}

DataArea.propTypes = {
  xScale: React.PropTypes.func.isRequired,
  yScale: React.PropTypes.func.isRequired,
  data: React.PropTypes.arrayOf(React.PropTypes.shape({
    date: React.PropTypes.string.isRequired,
    value: React.PropTypes.number.isRequired,
  })).isRequired,
  height: React.PropTypes.number.isRequired,
  color: React.PropTypes.array,
}

DataArea.defaultProps = {
  color: [0,0,0],
}

export default DataArea;
