// Libs
import React, {Component} from 'react';
import {pick} from 'lodash';

// Material-UI Components
import {Card, CardActions, CardHeader, CardMedia, CardText} from 'material-ui/Card';
import IconButton from 'material-ui/IconButton';
import NavigationMoreVert from 'material-ui/svg-icons/navigation/more-vert'
import RaisedButton from 'material-ui/RaisedButton';

// src Components
import InstantDataChip from './InstantDataChip';
import ActionButton from './ActionButton';
import SetPointForm from './SetPointForm';
import Chart from './Chart';

// Styles
const styles = {
  header:{
    padding: '10px 8px',
  },
  collapsedHeaderTitle: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    font: '15px Roboto,sans-serif',
    color: 'rgba(0, 0, 0, 0.870588)',
    paddingTop: '8px',
  },
  collapsedHeaderData: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  headerButton: {
    padding: '4px',
  },
  objectRowDiv: {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    padding: '0 6px',
  },
  actions: {
    marginRight: '0px',
    maxWidth: '200px',
  },
}

// Component
class Process extends Component {
  constructor(props){
    super(props);
    this.state = {
      expanded: this.props.initiallyExpanded
    };
    this.handleExpandChange = this.handleExpandChange.bind(this);
  }


  handleExpandChange = (expanded) => {
    console.log('handleExpandChange');
      this.setState({
        expanded: expanded,
      });
  };

  handleExpand = () => {
    console.log('handleExpand');
    this.handleExpandChange(true);
  };

  handleButton(e) {
    console.log('handleButton');
    e.stopPropagation();
  }

  render() {
    let sensors = this.props.data.sensors;
    let setpoints = this.props.data.processes;
    let actions = this.props.data.actions;

    // Get Data Point Arrays
    let dataPoints = sensors.map((sensor) => {
      return pick(sensor, ['dataMeta','data']);
    });

    // Create Instant Datas
    let instantDatas = sensors.map((sensor) =>{
      let mostRecentDataPoint = sensor.data.length - 1;
      let mostRecentData = sensor.data[mostRecentDataPoint].value;
      return(
        <InstantDataChip
          name={sensor.name}
          type={sensor.dataMeta.type}
          data={mostRecentData}
          unit={sensor.dataMeta.unit}
          battery={sensor.batteryLevel}
          key={sensor._id}
        />
      );
    });
    // Create Setpoint/Action Buttons
    let setpointForms = setpoints.map((setpoint) => {
      return(
        <SetPointForm
          controlled={setpoint.controlled}
          value={setpoint.value}
          unit={setpoint.unit}
          sensorName={setpoint.sensorName}
          key={setpoint._id}
        />
      )
    });
    let actionButtons = actions.map((action) => {
      return(
        <ActionButton
          name={action.name}
          type={action.type}
          duration={action.duration}
          while={action.while}
          disabled={false}
          key={action._id}
        />
      )
    });
    // Create Device info section

    return (
      <Card expanded={this.state.expanded} onExpandChange={this.handleExpandChange} style={this.props.style}>

        <div className="unexpanded-header"
          onTouchTap={this.handleExpand}
          style={styles.header}
          hidden={this.state.expanded}>
          <div style={styles.collapsedHeaderTitle}>
            {this.props.data.meta.name}
          </div>
          <div style={styles.collapsedHeaderData}>
            {instantDatas[0]}{instantDatas[1]}
            <RaisedButton
              backgroundColor="rgba(63,191,63,0.8)"
              disabledBackgroundColor="rgba(191,65,63,0.2)"
              >
              {actions[0].name}
            </RaisedButton>
          </div>
        </div>

        <CardHeader
          title={this.props.data.meta.name}
          subtitle={this.props.data.device.name}
          style={styles.header}
          expandable={true}
          actAsExpander={true}
        >
          <IconButton style={styles.headerButton}><NavigationMoreVert /></IconButton>
        </CardHeader>

        <CardMedia expandable={true}>
          <Chart
            data={dataPoints}
            height={200}
            padding={30}
          />
        </CardMedia>

        <CardText style={styles.objectRowDiv}
        expandable={true}>
          {instantDatas}
        </CardText>

        <CardActions style={styles.objectRowDiv} className="pure-g"
        expandable={true}
        >
          <div className="pure-u-1-2" style={styles.actions}>{setpointForms} </div>
          <div className="pure-u-1-2" style={styles.actions}>{actionButtons}</div>
        </CardActions>
      </Card>
    );
  }
};

export default Process;
