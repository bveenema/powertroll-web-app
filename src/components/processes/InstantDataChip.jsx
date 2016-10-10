// Libs
import React from 'react';

// Components
import Chip from 'material-ui/Chip';
import Avatar from 'material-ui/Avatar';

//Battery SVGs
import DeviceBatteryFull from 'material-ui/svg-icons/device/battery-full';
import DeviceBattery90 from 'material-ui/svg-icons/device/battery-90';
import DeviceBattery80 from 'material-ui/svg-icons/device/battery-80';
import DeviceBattery60 from 'material-ui/svg-icons/device/battery-60';
import DeviceBattery50 from 'material-ui/svg-icons/device/battery-50';
import DeviceBattery30 from 'material-ui/svg-icons/device/battery-30';
import DeviceBattery20 from 'material-ui/svg-icons/device/battery-20';
import DeviceBatteryAlert from 'material-ui/svg-icons/device/battery-alert';

// Style
const styles = {
  chip: {
    margin: '4px',
  }
}

// Component
const InstantDataChip = (props) => {
  // define chip color from prop.type
    let chipColor;
    if (props.type === "default") {chipColor="rgba(224,224,224,0.6)"}
    if (props.type === "temperature") {chipColor="rgba(224,0,0,0.6)"}
    if (props.type === "boolean") {chipColor="rgba(50,50,50,0.6)"}
    if (props.type === "humidity") {chipColor="rgba(0,0,224,0.6)"}

  // define battery icon from prop.battery
    let batteryIcon;
         if (props.battery < 10) {batteryIcon=<DeviceBatteryAlert />}
    else if (props.battery < 20) {batteryIcon=<DeviceBattery20 />}
    else if (props.battery < 30) {batteryIcon=<DeviceBattery30 />}
    else if (props.battery < 50) {batteryIcon=<DeviceBattery50 />}
    else if (props.battery < 60) {batteryIcon=<DeviceBattery60 />}
    else if (props.battery < 80) {batteryIcon=<DeviceBattery80 />}
    else if (props.battery < 90) {batteryIcon=<DeviceBattery90 />}
    else {batteryIcon=<DeviceBatteryFull />}

  // Change boolean unit chips to ON/OFF, TRUE/FALSE, YES/NO
    let dataDisplay;
    if(props.type === "boolean"){
      let stateStrings = props.unit.split("/");
      if(props.data === 1){
        dataDisplay = stateStrings[0].toUpperCase();
      }else {
        dataDisplay = stateStrings[1].toUpperCase();
      }

    } else {
      dataDisplay = `${props.data} ${props.unit}`;
    }

  return (
    <Chip style={styles.chip} backgroundColor={chipColor} labelColor="#ffffff">
      <Avatar color="#444" icon={batteryIcon} backgroundColor="#f7f7f7"/>
      <span className="pure-hidden-xs">{props.name}: </span>{dataDisplay}
    </Chip>
  );
}

InstantDataChip.propTypes = {
  name: React.PropTypes.string.isRequired,
  type: React.PropTypes.string,
  data: React.PropTypes.number.isRequired,
  unit: React.PropTypes.string,
  battery: React.PropTypes.number.isRequired,
}

InstantDataChip.defaultProps = {
  type: "default",
  unit: "",
}

export default InstantDataChip;
