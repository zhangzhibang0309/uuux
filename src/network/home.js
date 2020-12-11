// 引入刚才封装的网络模块
import { request1 } from './request'

// 首页轮播图
export function getHomeSwiper () {
  return request1({
    url: '/ushop/macadvertasset/api/getAllHb/1'
  })
}

// 首页分类栏
export function getHomeSCategory () {
  return request1({
    url: '/ushop/prcskukind/api/getAllCdflByParentId'
  })
}

// 爆款接口
export function getHomeGoodsList () {
  return request1({
    url: '/ushop/prcsku/api/getBkPrcSkus'
  })
}

// 爆款接口
export function getHomeActiveArea () {
  return request1({
    url: '/ushop/prcskukind/api/getAllCdflByParentId?showLocation=02'
  })
}
