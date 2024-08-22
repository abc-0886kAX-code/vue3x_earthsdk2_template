/*
 * @Author: abc-0886kAX-code
 * @Date: 2023-11-29 10:55:30
 * @LastEditors: abc-0886kAX-code
 * @LastEditTime: 2024-08-22 11:13:08
 * @Description: file content
 */
import { Mapview } from '../entity/Mapview'
import { useAttach } from './useAttach.js'
import { Load } from '@/biz/share/entify/Load'

export function useEarthSDK2Setup(props, emits) {
  const { loading, loadStyle, setupLoading } = Load()

  const isMounted = ref(false)

  const mapbox = ref(null)

  const mapview = new Mapview(props.config)

  const mapviewRef = useAttach(mapview, mapbox)

  provide('111', mapviewRef)

  onMounted(() => {
    mapview.onReady(() => {
      emits('onReady', mapview.view)
      setupLoading(false)
      isMounted.value = true
    })
  })

  onUnmounted(() => {
    isMounted.value = false
  })

  return {
    isMounted,
    loading,
    loadStyle,
    mapbox,
    mapview,
    setupLoading,
  }
}
