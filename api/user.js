import request from './request.js'

//科室列表
export const userLogin = (data) => {
  return request.postRequest("rfbUser/login",data,{
    'content-type': 'application/x-www-form-urlencoded' // 默认值
  })
}

export const userUpdate=(data)=>{
  console.log(data)
  return request.postRequest("rfbUser/update",data)
}
