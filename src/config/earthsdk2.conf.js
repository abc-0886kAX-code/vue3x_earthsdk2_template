const config = {
  viewers: [
    {
      atmosphere: true,
      depthOfField: 0,
      apiKey: '',
      globeShow: true,
      show: true,
      type: 'ESUeViewer',
      fov: 60,
      sun: true,
      lonLatFormat: 'DECIMAL_DEGREE',
      cloud: 0,
      apiUrl: '',
      id: '60a3dcc2-8098-4129-afab-44dbfe515b91',
      app: '2211082c-00bf-4aeb-b6e1-8c276310f617',
      rain: 0,
      debug: false,
      secretKey: '',
      timeSync: false,
      speechVoiceMode: '',
      ionAccessToken: '',
      uri: 'http://192.1.1.244:9007',
      currentTime: 1724212800000,
      moon: true,
      snow: 0,
      name: 'undefined_ined',
      simulationTime: 1724169600000,
      hoverTime: 2,
      fog: 0,
    },
  ],
  viewCollection: [],
  sceneTree: {
    root: {
      children: [
        {
          children: [
            {
              children: [],
              collapsed: true,
              name: '天地图影像',
              sceneObj: {
                maximumLevel: 18,
                name: '天地图影像',
                rectangle: [
                  -180,
                  -90,
                  180,
                  90,
                ],
                id: '21388f52-863a-45e9-98b0-b2c1a2ce283d',
                allowPicking: true,
                type: 'ESImageryLayer',
                url: 'https://t2.tianditu.gov.cn/img_w/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=img&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TILECOL={x}&TILEROW={y}&TILEMATRIX={z}&tk=ef590000990e247813bf916bdce1d941',
              },
            },
            {
              children: [],
              collapsed: true,
              name: '天地图地图标注',
              sceneObj: {
                name: '天地图地图标注',
                id: 'bfd75689-2b29-49f4-9472-f7c171fc9bcd',
                allowPicking: true,
                type: 'ESImageryLayer',
                url: ' https://t5.tianditu.gov.cn/cva_w/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=cva&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TILECOL={x}&TILEROW={y}&TILEMATRIX={z}&tk=ef590000990e247813bf916bdce1d941',
                zIndex: 1,
              },
            },
            {
              children: [],
              name: ' cesium官方地形',
              sceneObj: {
                flyInParam: {
                  flyDuration: 1,
                  rotation: [
                    -164.85594177246094,
                    -75.60304260253906,
                    0,
                  ],
                  position: [
                    122.26901393550551,
                    46.680871999138915,
                    17827.1049816171,
                  ],
                },
                name: ' cesium官方地形',
                id: '6ea54d24-a467-4642-a8de-984c3529d5c0',
                allowPicking: true,
                type: 'ESTerrainLayer',
                zIndex: 2,
              },
            },
          ],
          name: '新建场景',
        },
      ],
    },
  },
  asset: {
    modifiedTime: '2024-08-21T02:22:54.098Z',
    name: '图层管理',
    createdTime: '2022-06-17T05:54:41.744Z',
    type: 'ESObjectsManager',
    version: '0.1.0',
  },
  lastView: {
    rotation: [
      0.09999847412109375,
      -89.9000015258789,
      0.009999983012676239,
    ],
    position: [
      106.24551319129833,
      37.209745033723024,
      9812382.23820746,
    ],
  },
}
const layers = []
export { config, layers }
