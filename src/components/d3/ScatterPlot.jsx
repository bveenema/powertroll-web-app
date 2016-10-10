// Libs
import React from 'react';
import {scaleLinear, max} from 'd3';

// Components
import DataCircles  from './DataCircles';
import XYAxis from './XYAxis';

// Returns the largest X coordinate from the data set
const xMax   = (data)  => max(data, (d) => d[0]);

// Returns the higest Y coordinate from the data set
const yMax   = (data)  => max(data, (d) => d[1]);

// Returns a function that "scales" X coordinates from the data to fit the chart
const xScale = (props) => {
  return scaleLinear()
    .domain([0, xMax(props.data)])
    .range([props.padding, props.width - props.padding * 2]);
};

// Returns a function that "scales" Y coordinates from the data to fit the chart
const yScale = (props) => {
  return scaleLinear()
    .domain([0, yMax(props.data)])
    .range([props.height - props.padding, props.padding]);
};

const ScatterPlot = (props) => {
  const scales = { xScale: xScale(props), yScale: yScale(props) };
  return (
    <svg width={props.width} height={props.height}>
      <DataCircles {...props} {...scales} />
      <XYAxis {...props} {...scales} />
    </svg>
  );
}

export default ScatterPlot;
