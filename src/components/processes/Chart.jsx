//Libs
import React, {Component} from 'react';
import Measure from 'react-measure';
import ScatterPlotTime from  '../d3/ScatterPlotTime';

class Chart extends Component {
  constructor(props) {
   super(props);
   this.state = {
     width: 0,
     height: this.props.height,
   };
   this.updateDimensions = this.updateDimensions.bind(this);
 }

 updateDimensions(dimensions) {
   let height = this.state.height;
   if(dimensions.width > 650){
     height = this.props.height+100;
   }else{
     height = this.props.height;
   }
   this.setState({
     width: dimensions.width,
     height: height,
   });
 }

  render(){
    return (
      <Measure  onMeasure={this.updateDimensions}>
        <div>
          <ScatterPlotTime
            data={this.props.data}
            height={this.state.height}
            width={this.state.width}
            padding={this.props.padding} />
        </div>
      </Measure>
    );
  }
}

export default Chart;
