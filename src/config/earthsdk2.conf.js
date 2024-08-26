/*
 * @FilePath: \vue3x_earthsdk2_template\src\config\earthsdk2.conf.js
 * @Author: abc-0886kAX-code
 * @Date: 2024-08-21 11:12:49
 * @LastEditors: abc-0886kAX-code
 * @LastEditTime: 2024-08-26 16:31:41
 * @Description:
 */
import BaseConfig from '@/assets/json/基础场景.json';
const config = BaseConfig;
const layers = []

// 初始化位置
const initPlace = {
  position: [116.416411, 38.849242, 409882],
  pitch: -70,
  heading: 0,
}

const SignalingServerUri = 'http://192.1.1.244:9007';
const AppExampleId = '2211082c-00bf-4aeb-b6e1-8c276310f617'

export { config, layers, initPlace, SignalingServerUri, AppExampleId }
