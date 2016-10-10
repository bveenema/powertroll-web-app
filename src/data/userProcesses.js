const userProcesses = [
  {
    meta: {
      name: "Fart Rainbows",
      topProcess: true,
      port: 0,
    },
    processes: [
      {
        _id: 66612345678901234567890,
        type: "setpoint",
        value: 65,
        unit: "F",
        controlled: 'water',
        sensorName: "Captain Greybeard",
      },
    ],
    device: {
      name: "Swamp Master",
      type: "PowerTroll Ought",
      connectionStatus: "online",
      _id: 5551234567890124567890123,
    },
    sensors: [
      {
				_id: 12345678901234561234567890123456,
				name: "Captain Greybeard",
				type: "floating thermometer",
        batteryLevel: 100,
				location: {
					description: "Garage",
					lat: 41.381494,
					long: 64.584042
				},
        dataMeta: {
          type: "temperature",
          unit: "F",
          color: [224,0,0]
        },
        data: [
          {
            date: "2016-09-14T12:49:15.000Z",
            value: 65,
          },
          {
            date: "2016-09-14T13:49:15.000Z",
            value: 66,
          },
          {
            date: "2016-09-14T14:49:15.000Z",
            value: 67,
          },
          {
            date: "2016-09-14T15:49:15.000Z",
            value: 68,
          },
          {
            date: "2016-09-14T16:49:15.000Z",
            value: 69,
          },
          {
            date: "2016-09-14T17:49:15.000Z",
            value: 70,
          },
          {
            date: "2016-09-14T18:49:15.000Z",
            value: 70.5,
          },
          {
            date: "2016-09-14T19:49:15.000Z",
            value: 71,
          },
          {
            date: "2016-09-14T20:49:15.000Z",
            value: 71.25,
          },
          {
            date: "2016-09-14T21:49:15.000Z",
            value: 71.5,
          },

        ],
			},
      {
				_id: 22345678901234561234567890123457,
				name: "McSwitchy",
				type: "end stop",
        batteryLevel: 50,
				location: {
					description: "Porch",
					lat: 41.381494,
					long: 64.584042
				},
        dataMeta: {
          type: "boolean",
          unit: "on/off",
          color: [50,50,50],
        },
        data: [
          {
            date: "2016-09-14T12:49:15.000Z",
            value: 0,
          },
          {
            date: "2016-09-14T13:49:15.000Z",
            value: 0,
          },
          {
            date: "2016-09-14T14:49:15.000Z",
            value: 0,
          },
          {
            date: "2016-09-14T15:49:15.000Z",
            value: 1,
          },
          {
            date: "2016-09-14T16:49:15.000Z",
            value: 1,
          },
          {
            date: "2016-09-14T17:49:15.000Z",
            value: 0,
          },
          {
            date: "2016-09-14T18:49:15.000Z",
            value: 0,
          },
          {
            date: "2016-09-14T19:49:15.000Z",
            value: 0,
          },
          {
            date: "2016-09-14T20:49:15.000Z",
            value: 0,
          },
          {
            date: "2016-09-14T21:49:15.000Z",
            value: 1,
          },

        ],
			},
      {
				_id: 32345678901234561234567890123458,
				name: "Panama Joe",
				type: "outdoor humidity",
        batteryLevel: 5,
				location: {
					description: "Attic",
					lat: 41.381494,
					long: 64.584042
				},
        dataMeta: {
          type: "humidity",
          unit: "%RH",
          color: [0,0,224],
        },
        data: [
          {
            date: "2016-09-14T12:49:15.000Z",
            value: 5,
          },
          {
            date: "2016-09-14T13:49:15.000Z",
            value: 10,
          },
          {
            date: "2016-09-14T14:49:15.000Z",
            value: 15,
          },
          {
            date: "2016-09-14T15:49:15.000Z",
            value: 20,
          },
          {
            date: "2016-09-14T16:49:15.000Z",
            value: 22,
          },
          {
            date: "2016-09-14T17:49:15.000Z",
            value: 24,
          },
          {
            date: "2016-09-14T18:49:15.000Z",
            value: 26,
          },
          {
            date: "2016-09-14T19:49:15.000Z",
            value: 27,
          },
          {
            date: "2016-09-14T20:49:15.000Z",
            value: 28,
          },
          {
            date: "2016-09-14T21:49:15.000Z",
            value: 29,
          },

        ],
			},
    ],
    actions: [
      {
        _id: 99912345678901234567890123,
        name: "Run Motor",
        port: 1,
        type: {
          name: "duty",
          value: 65,
        },
        duration: 0,
        while: {
          sensorName: "McSwitchy",
          level: 0,
          invert: false,
        },
      },
    ],
  },
  {
    meta: {
      name: "Fart Rainbows",
      topProcess: true,
      port: 0,
    },
    processes: [
      {
        _id: 66612345678901234567890,
        type: "setpoint",
        value: 65,
        unit: "F",
        controlled: 'water',
        sensorName: "Captain Greybeard",
      },
    ],
    device: {
      name: "Swamp Master",
      type: "PowerTroll Ought",
      connectionStatus: "online",
      _id: 5551234567890124567890123,
    },
    sensors: [
      {
        _id: 12345678901234561234567890123456,
        name: "Captain Greybeard",
        type: "floating thermometer",
        batteryLevel: 100,
        location: {
          description: "Garage",
          lat: 41.381494,
          long: 64.584042
        },
        dataMeta: {
          type: "temperature",
          unit: "F",
          color: [224,0,0]
        },
        data: [
          {
            date: "2016-09-14T12:49:15.000Z",
            value: 65,
          },
          {
            date: "2016-09-14T13:49:15.000Z",
            value: 66,
          },
          {
            date: "2016-09-14T14:49:15.000Z",
            value: 67,
          },
          {
            date: "2016-09-14T15:49:15.000Z",
            value: 68,
          },
          {
            date: "2016-09-14T16:49:15.000Z",
            value: 69,
          },
          {
            date: "2016-09-14T17:49:15.000Z",
            value: 70,
          },
          {
            date: "2016-09-14T18:49:15.000Z",
            value: 70.5,
          },
          {
            date: "2016-09-14T19:49:15.000Z",
            value: 71,
          },
          {
            date: "2016-09-14T20:49:15.000Z",
            value: 71.25,
          },
          {
            date: "2016-09-14T21:49:15.000Z",
            value: 71.5,
          },

        ],
      },
      {
        _id: 22345678901234561234567890123457,
        name: "McSwitchy",
        type: "end stop",
        batteryLevel: 50,
        location: {
          description: "Porch",
          lat: 41.381494,
          long: 64.584042
        },
        dataMeta: {
          type: "boolean",
          unit: "on/off",
          color: [50,50,50],
        },
        data: [
          {
            date: "2016-09-14T12:49:15.000Z",
            value: 0,
          },
          {
            date: "2016-09-14T13:49:15.000Z",
            value: 0,
          },
          {
            date: "2016-09-14T14:49:15.000Z",
            value: 0,
          },
          {
            date: "2016-09-14T15:49:15.000Z",
            value: 1,
          },
          {
            date: "2016-09-14T16:49:15.000Z",
            value: 1,
          },
          {
            date: "2016-09-14T17:49:15.000Z",
            value: 0,
          },
          {
            date: "2016-09-14T18:49:15.000Z",
            value: 0,
          },
          {
            date: "2016-09-14T19:49:15.000Z",
            value: 0,
          },
          {
            date: "2016-09-14T20:49:15.000Z",
            value: 0,
          },
          {
            date: "2016-09-14T21:49:15.000Z",
            value: 1,
          },

        ],
      },
      {
        _id: 32345678901234561234567890123458,
        name: "Panama Joe",
        type: "outdoor humidity",
        batteryLevel: 5,
        location: {
          description: "Attic",
          lat: 41.381494,
          long: 64.584042
        },
        dataMeta: {
          type: "humidity",
          unit: "%RH",
          color: [0,0,224],
        },
        data: [
          {
            date: "2016-09-14T12:49:15.000Z",
            value: 5,
          },
          {
            date: "2016-09-14T13:49:15.000Z",
            value: 10,
          },
          {
            date: "2016-09-14T14:49:15.000Z",
            value: 15,
          },
          {
            date: "2016-09-14T15:49:15.000Z",
            value: 20,
          },
          {
            date: "2016-09-14T16:49:15.000Z",
            value: 22,
          },
          {
            date: "2016-09-14T17:49:15.000Z",
            value: 24,
          },
          {
            date: "2016-09-14T18:49:15.000Z",
            value: 26,
          },
          {
            date: "2016-09-14T19:49:15.000Z",
            value: 27,
          },
          {
            date: "2016-09-14T20:49:15.000Z",
            value: 28,
          },
          {
            date: "2016-09-14T21:49:15.000Z",
            value: 29,
          },

        ],
      },
    ],
    actions: [
      {
        _id: 99912345678901234567890123,
        name: "Run Motor",
        port: 1,
        type: {
          name: "duty",
          value: 65,
        },
        duration: 0,
        while: {
          sensorName: "McSwitchy",
          level: 0,
          invert: false,
        },
      },
    ],
  },
]

export default userProcesses;
