const templates = [
  {
    name: "Brew Beer",
    needsSensorType: "temperature",
    defaultSettings: {
      loadType: "resistive",
      controlType: "follow curve",
      controlMethod: "PID",
    }
  },
  {
    name: "Open Door",
    needsSensorType: "boolean",
    defaultSettings: {
      loadType: "ac motor",
      controlType: "setpoint",
      controlMethod: "duty",
    }
  },
  {
    name: "Make Yogurt",
    needsSensorType: "temperature",
    defaultSettings: {
      loadType: "resistive",
      controlType: "setpoint",
      controlMethod: "PID",
    }
  },
  {
    name: "Control Sprinklers",
    needsSensorType: "moisture",
    defaultSettings: {
      loadType: "inductive",
      controlType: "schedule",
      controlMethod: "On/Off",
    }
  }
];

export default templates;
