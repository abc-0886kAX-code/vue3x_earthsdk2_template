/*
 * @FilePath: \vue3x_earthsdk2_template\src\router\useRouter.js
 * @Author: zhangxin
 * @Date: 2022-11-30 10:18:11
 * @LastEditors: abc-0886kAX-code
 * @LastEditTime: 2024-08-26 14:53:28
 * @Description:
 */
import { defineRouter } from './defineRouter'
import { defineMeta } from '@/router/meta'

export const routes = [
  {
    name: 'login',
    path: '/login',
    meta: defineMeta(),
    component: () => import('@/layout/login/login.vue'),
  },
  {
    name: 'singleLogin',
    path: '/singleLogin',
    meta: defineMeta(),
    component: () => import('@/layout/loginsso/loginsso.vue'),
  },
  {
    name: 'debug',
    path: '/debug',
    meta: defineMeta(),
    component: () => import('@/pages/Debug/debug.vue'),
  },
  {
    name: 'layout',
    path: '/',
    redirect: '/example',
    meta: defineMeta({ level: 0 }),
    component: () => import('@/layout/Home.vue'),
    children: [
      {
        path: '/example',
        name: 'example',
        redirect: '/example/scene-switch',
        meta: {
          title: '示例',
          hidden: 'true',
        },
        component: () => import('@/layout/main-layout/main-layout.vue'),
        children: [
          {
            path: '/example/scene-switch',
            name: 'scene-switch',
            meta: {
              title: '场景切换',
              hidden: 'true',
            },
            component: () => import('@/pages/Example/SceneSwitch.vue'),
            children: [],
          },
        ],
      },
      {
        path: '/home',
        name: 'home',
        meta: {
          title: '首页',
          hidden: 'true',
        },
        component: () => import('@/pages/home/home.vue'),
      },
      {
        path: '/debug',
        name: 'debug',
        meta: {
          title: 'debug',
          hidden: 'true',
        },
        component: () => import('@/pages/Debug/debug.vue'),
      },
      {
        path: '/NotPage',
        name: 'NotPage',
        meta: {
          title: 'NotPage',
          hidden: 'true',
        },
        component: () => import('@/pages/NotPage/not-page.vue'),
      },
    ],
  },
  {
    name: '404',
    path: '/404',
    meta: defineMeta({ title: '404' }),
    component: () => import('@/pages/NotPage/not-page.vue'),
  },
  {
    path: '/:catchAll(.*)', // 不识别的path自动匹配404
    redirect: '/404',
  },
]
const router = defineRouter(routes)

export function useRouter() {
  return router.core
}

export function useRoute() {
  return router.core.currentRoute
}

export const resetRoute = router.reset

export default router
