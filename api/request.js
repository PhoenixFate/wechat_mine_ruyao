/**
 * name: api.js
 * description: request处理基础类
 * author: 徐磊
 * date: 2018-5-19
 */
import baseUrl from "./url.js"

/**
 * GET类型的网络请求
 */
function getRequest(url, data, header) {
  return requestAll(url, data, header, 'GET')
}

/**
 * DELETE类型的网络请求
 */
function deleteRequest(url, data, header) {
  return requestAll(url, data, header, 'DELETE')
}

/**
 * PUT类型的网络请求
 */
function putRequest(url, data, header) {
  return requestAll(url, data, header, 'PUT')
}

/**
 * POST类型的网络请求
 */
function postRequest(url, data, header) {
  return requestAll(url, data, header, 'POST')
}

/**
 * 网络请求
 */
function requestAll(url, data, header, method) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: baseUrl.baseUrl + url,
      data: data,
      header: header,
      method: method,
      success: (res => {
        if (res.statusCode === 200) {
          //200: 服务端业务处理正常结束
          resolve(res)
        } else {
          reject(res)
        }
      }),
      fail: (res => {
        reject(res)
      })
    })
  })
}

export default {getRequest,postRequest,putRequest,deleteRequest}