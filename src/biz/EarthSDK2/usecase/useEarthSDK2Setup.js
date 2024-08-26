/*
 * @Author: abc-0886kAX-code
 * @Date: 2023-11-29 10:55:30
 * @LastEditors: abc-0886kAX-code
 * @LastEditTime: 2024-08-26 16:06:23
 * @Description: file content
 */
import { Load } from '@/biz/share/entify/Load'
import { useEarthStore } from '@/biz/EarthSDK2/store/useEarth.js'

export function useEarthSDK2Setup(props, emits) {
  const earthStore = useEarthStore()

  const { loading, loadStyle, setupLoading } = Load()

  const isMounted = ref(false)

  const mapbox = ref(null)

  onMounted(() => {
    earthStore.connect({
      baseScene: props.config,
      mapbox: mapbox.value,
    })
    earthStore.render(() => {
      emits('onReady')
      setupLoading(false)
      isMounted.value = true
    })
  })

  onUnmounted(() => {
    isMounted.value = false
    earthStore.close()
  })

  return {
    isMounted,
    loading,
    loadStyle,
    mapbox,
    setupLoading,
  }
}
