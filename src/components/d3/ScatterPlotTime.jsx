// Libs
import React from 'react';
import {scaleLinear, scaleTime, extent, max, isoParse} from 'd3';
import {flatten} from 'lodash';

// Components
import DataCircles  from './DataCircles';
import DataLine from './DataLine';
import DataArea from './DataArea';
import XYAxis from './XYAxis';



// Returns the largest X coordinate from the data set
const xDomain   = (data)  => extent(data, (d) => isoParse(d.date));

// Returns the higest Y coordinate from the data set
const yDomain   = (data)  => extent(data, (d) => d.value);

// Returns a function that "scales" X coordinates from the data to fit the chart
const xScale = (props, data) => {
  return scaleTime()
    .domain(xDomain(data))
    .range([props.padding, props.width - props.padding * 2]);
};

// Returns a function that "scales" Y coordinates from the data to fit the chart
const yScale = (props, data) => {
  return scaleLinear()
    .domain(yDomain(data))
    .range([props.height - props.padding, props.padding]);
};

const ScatterPlotTime = (props) => {
  // Create macro array of all data points
  const allData = flatten(props.data.map((dataSubset) =>{
    return dataSubset.data;
  }));

  // Calculate yMax
  let yMax = max(allData, (d) => d.value);

  // Scale any boolean data types so 1 = 1/2 yMax
  const data = props.data.map((dataSubset) => {
    let newData = {
      data: dataSubset.data,
      dataMeta: dataSubset.dataMeta,
    };
    if(dataSubset.dataMeta.type === 'boolean'){
      newData.data = dataSubset.data.map((dataObject) => {
        return {
          date: dataObject.date,
          value: dataObject.value * (yMax/2),
        };
      });
    }
    return newData;
  });



  const scales = { xScale: xScale(props, allData), yScale: yScale(props, allData) };
  // Create the lines
  let lineSet = data.map((dataSubset, index) => {
    return(
      <g className="line-set" key={index}>
        <DataCircles
          xScale={scales.xScale}
          yScale={scales.yScale}
          data={dataSubset.data}
          color={dataSubset.dataMeta.color}
          key={index*1000+1}
        />
        <DataLine
          xScale={scales.xScale}
          yScale={scales.yScale}
          data={dataSubset.data}
          type={dataSubset.dataMeta.type}
          color={dataSubset.dataMeta.color}
          key={index*1000+2}
        />
        <DataArea
          xScale={scales.xScale}
          yScale={scales.yScale}
          data={dataSubset.data}
          type={dataSubset.dataMeta.type}
          color={dataSubset.dataMeta.color}
          height={props.height-props.padding}
          key={index*1000+3}
        />
      </g>
    );
  });


  return (
    <svg width={props.width} height={props.height}>
      {lineSet}
      <XYAxis {...props} {...scales} />
    </svg>
  );
}

export default ScatterPlotTime;
