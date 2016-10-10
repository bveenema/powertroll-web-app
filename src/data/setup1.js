const setupSettings = {
  devices: [
    {
      _id: 1,
      name: 'Garage Troll 1',
      type: 'PowerTroll O',
    },
    {
      _id: 2,
      name: 'Swamp Master',
      type: 'PowerTroll O',
    },
    {
      _id: 3,
      name: 'Shop Jockey',
      type: 'PowerTroll O',
    }
  ],
  sensors: [
    {
      _id: 1,
      name: 'Captain Greybeard',
      type: 'temperature',
    },
    {
      _id: 2,
      name: 'McSwitchy',
      type: 'boolean',
    },
    {
      _id: 3,
      name: 'Panama Joe',
      type: 'humidity',
    },
    {
      _id: 4,
      name: 'South Wall Thermometer',
      type: 'thermometer',
    },
    {
      _id: 5,
      name: 'South Wall Humidity',
      type: 'humidity',
    },
  ],
  loadTypes: [
    {
      name: 'resistive',
      examples: [
        'heater',
        'crock-pot',
        'lightbulb',
      ],
      enabled: true,
    },
    {
      name: 'ac motor',
      examples: [
        'power drill',
        'refrigerator/freezer compressor',
      ],
      enabled: true,
    },
    {
      name: 'inductive',
      examples: [
        'sprinkler valve',
        'solenoid',
      ],
      enabled: false,
    },
    {
      name: 'capacitive',
      examples: [
        'example capacitive load',
      ],
      enabled: false,
    },
  ],
  controlTypes: [
    {
      name: 'setpoint',
      enabled: true,
    },
    {
      name: 'follow curve',
      enabled: false,
    },
    {
      name: 'schedule',
      enabled: false,
    },
    {
      name: 'threshold',
      enabled: false,
    },
    {
      name: 'notify',
      enabled: true,
    }
  ],
  controlMethods: [
    {
      name: 'On/Off',
      examples: [
        'sprinklers',
        'solenoid',
      ],
      enabled: true,
    },
    {
      name: 'Constant Duty',
      examples: [
        'heater',
        'AC motor',
      ],
      enabled: true,
    },
    {
      name: 'PID',
      examples: [
        'heater',
        'AC motor',
      ],
      enabled: true,
    },
    {
      name: 'Predictive',
      examples: [
        'heater',
        'ac motor'
      ],
      enabled: false,
    }
  ],
}

export default setupSettings;
