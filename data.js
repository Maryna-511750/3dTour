var APP_DATA = {
  "scenes": [
    {
      "id": "0-first-room",
      "name": "First room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 960,
      "initialViewParameters": {
        "yaw": 0.056478153129932096,
        "pitch": 0.04622477506266165,
        "fov": 1.5257710960883093
      },
      "linkHotspots": [
        {
          "yaw": -3.106916794097515,
          "pitch": 0.12053715673195775,
          "rotation": 0,
          "target": "1-studio"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-studio",
      "name": "Studio",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 960,
      "initialViewParameters": {
        "yaw": 0.0862745852492548,
        "pitch": 0.06964158466392689,
        "fov": 1.5257710960883093
      },
      "linkHotspots": [
        {
          "yaw": -0.016205622244156004,
          "pitch": 0.13105317872372169,
          "rotation": 6.283185307179586,
          "target": "0-first-room"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.8822444062185006,
          "pitch": 0.13191431985706714,
          "title": "Work zone",
          "text": "My main computer"
        }
      ]
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": true
  }
};
