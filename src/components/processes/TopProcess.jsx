// Libs
import React from 'react';
import {pick} from 'lodash';

// Material-UI Components
import {Card, CardActions, CardHeader, CardMedia, CardText} from 'material-ui/Card';
import IconButton from 'material-ui/IconButton';
import NavigationMoreVert from 'material-ui/svg-icons/navigation/more-vert'

// src Components
import InstantDataChip from './InstantDataChip';
import ActionButton from './ActionButton';
import SetPointForm from './SetPointForm';
import Chart from './Chart';

// Styles
const styles = {
  header:{
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 8px',
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
const TopProcess = (props) => {
  let sensors = props.data.sensors;
  let setpoints = props.data.processes;
  let actions = props.data.actions;

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
    <Card>
      <CardHeader title={props.data.meta.name} subtitle={props.data.device.name} style={styles.header}>
        <IconButton style={styles.headerButton}><NavigationMoreVert /></IconButton>
      </CardHeader>

      <CardMedia>
        <Chart
          data={dataPoints}
          height={200}
          padding={30}
        />
      </CardMedia>

      <CardText style={styles.objectRowDiv}>
        {instantDatas}
      </CardText>

      <CardActions style={styles.objectRowDiv} className="pure-g">
        <div className="pure-u-1-2" style={styles.actions}>{setpointForms}</div>
        <div className="pure-u-1-2" style={styles.actions}>{actionButtons}</div>
      </CardActions>
    </Card>
  );
};

export default TopProcess;
