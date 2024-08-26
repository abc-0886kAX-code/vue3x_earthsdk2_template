<script setup>
// 引入依赖，变量声明
import { storeToRefs } from 'pinia'
import { AppExampleId, SignalingServerUri } from '@/config/earthsdk2.conf'
import { useEarthStore } from '@/biz/EarthSDK2/store/useEarth.js'

const earthStore = useEarthStore()
const { cloudRender, mapbox } = storeToRefs(earthStore)
// 自定义方法
function switchCesium() {
  // 切换Cesium的API
  unref(cloudRender).switchToCesiumViewer({
    domid: unref(mapbox),
  })
}

function switchUE() {
  unref(cloudRender).switchToUEViewer({
    domid: unref(mapbox),
    uri: SignalingServerUri,
    app: AppExampleId,
  })
}
// watch api/vue生命周期钩子等
</script>

<template>
  <button @click="switchCesium">
    切换Cesium视口
  </button>
  <button @click="switchUE">
    切换UE视口
  </button>
</template>

<style scoped lang='scss'>
.scene-switch{
  color: pink;
}
</style>
