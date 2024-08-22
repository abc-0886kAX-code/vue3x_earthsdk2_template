/*
 * @FilePath: \vue3x_earthsdk2_template\src\biz\EarthSDK2\entity\Mapview.js
 * @Author: abc-0886kAX-code
 * @Date: 2024-08-21 10:54:47
 * @LastEditors: abc-0886kAX-code
 * @LastEditTime: 2024-08-22 14:06:56
 * @Description:
 */
import { ESObjectsManager } from 'esobjs-xe2-plugin/dist-node/esobjs-xe2-plugin-main'
import { uuid } from '@/shared/uuid.js'

export class Mapview {
  _id = uuid()
  objm = null
  view = null
  config = {}
  constructor(config) {
    this.config = config
  }

  onReady(handler) {
    // 监听视口状态
    this.view.statusChanged.don((status) => {
      switch (status) {
        case 'Creating':
          console.log('视口正在创建')
          break
        case 'Created':
          console.log('视口已创建')
          handler()
          break
      }
    })
  }

  install(mapbox) {
    this.objm = new ESObjectsManager()
    this.objm.jsonLoadingEvent.don((e) => {
      if (e.type !== 'loaded')
        return
      console.log('jso加载完成了!', e)
    })

    this.objm.json = { ...this.config }

    this.view = this.objm.createUEViewer({
      domid: mapbox, // dom容器id或者dom元素
      uri: 'http://192.1.1.244:9007', // 信令服务器服务地址
      app: '2211082c-00bf-4aeb-b6e1-8c276310f617', // 应用实例id
      id: this._id,
    })

    return this.view
  }

  uninstall() {
    this.objm.destroyViewer(this.view)
    this.view = null
    this.objm = null
  }
}
