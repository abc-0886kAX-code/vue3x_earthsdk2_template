<!--
 * @FilePath: \vue3x_earthsdk2_template\src\biz\EarthSDK2\view\EarthSdk2Container\EarthSdk2Container.vue
 * @Author: abc-0886kAX-code
 * @Date: 2023-11-29 10:45:41
 * @LastEditors: abc-0886kAX-code
 * @LastEditTime: 2024-08-22 11:18:27
 * @Description:
-->
<script setup>
import { useEarthSDK2Setup } from '@/biz/EarthSDK2/usecase/useEarthSDK2Setup'

const props = defineProps({
  config: {
    type: Object,
    default: () => ({}),
  },
  layers: {
    type: Array,
    default: () => [],
  },
})

const emits = defineEmits(['onReady'])

const { isMounted, loading, loadStyle, mapbox, mapview } = useEarthSDK2Setup(props, emits)
</script>

<template>
  <div ref="mapbox" v-loading="loading" class="earthsdk2-container" v-bind="loadStyle">
    <slot v-if="isMounted" />
  </div>
</template>

<style lang="scss" scoped>
.earthsdk2-container {
  z-index: 999;
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>
