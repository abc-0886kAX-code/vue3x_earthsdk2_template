/*
 * @FilePath: \vue3x_earthsdk2_template\src\biz\EarthSDK2\store\useEarth.js
 * @Author: abc-0886kAX-code
 * @Date: 2024-08-26 15:33:28
 * @LastEditors: abc-0886kAX-code
 * @LastEditTime: 2024-08-26 16:42:10
 * @Description:
 */
import { defineStore } from 'pinia'
import { ESObjectsManager } from 'esobjs-xe2-plugin/dist-node/esobjs-xe2-plugin-main'
import { AppExampleId, SignalingServerUri, initPlace } from '@/config/earthsdk2.conf'

export const Namespace = 'useEarth'

export const useEarth = defineStore(Namespace, {
  state: () => ({
    cloudRender: new ESObjectsManager(),
    viewer: null,
    mapbox: null,
  }),

  getters: {},

  actions: {
    connect({ baseScene, mapbox }) {
      this.cloudRender.json = { ...baseScene }
      this.mapbox = mapbox
      this.viewer = this.cloudRender.createUEViewer({
        domid: this.mapbox, // dom容器id或者dom元素
        uri: SignalingServerUri, // 信令服务器服务地址
        app: AppExampleId, // 应用实例id
      })
    },
    render(handler) {
      this.viewer.statusChanged.don((status) => {
        if (status === 'Created') {
          handler()
        }
      })

      this.cloudRender.activeViewer.flyTo({
        flyToParam: {
          heading: initPlace.heading,
          pitch: initPlace.pitch,
        },
        position: initPlace.position,
      })

      this.cloudRender.activeViewer.innerViewer.sunSkyControlled = true;
      this.cloudRender.activeViewer.currentTime = new Date().getTime()
    },
    close() {
      this.viewer.quit()
    },
  },
})

export function useEarthStore() {
  return useEarth()
}

export default {
  namespace: Namespace,
  store: useEarth,
}
