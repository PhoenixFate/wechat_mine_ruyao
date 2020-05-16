//app.js
import {userLogin,userUpdate} from "./api/user.js"

App({
  globalData: {
    userInfo: null
  },

  onLaunch: function () {
    console.log("app on launch")
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    this.login()
  },

  login() {
    // 登录
    wx.login({
      success: res => {
        console.log(res);
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        if (res.code) {
          userLogin({code:res.code}).then(result=>{
            console.log(result) 
            if (result.data.code == 0) {
              //获得openid成功 更新用户信息
              //获取用户信息
              wx.getSetting({
                success: res => {
                  console.log("wx.getSetting")
                  console.log(res)
                  if (res.authSetting['scope.userInfo']) {
                    // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
                    wx.getUserInfo({
                      lang: "zh_CN",
                      success: res => {
                        console.log("wx.getUserInfo")
                        console.log(res)
                        res.userInfo.id=result.data.user.id;
                        res.userInfo.openid=result.data.user.openid;
                        //更新用户信息
                        userUpdate(res.userInfo).then(updateResult=>{
                          console.log(updateResult);
                        });

                        // 可以将 res 发送给后台解码出 unionId
                        this.globalData.userInfo = res.userInfo
                        console.log("globalData.userInfo: "+this.globalData.userInfo);
                        // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
                        // 所以此处加入 callback 以防止这种情况
                        if (this.userInfoReadyCallback) {
                          this.userInfoReadyCallback(res)
                        }
                      }
                    })
                  }
                }
              })
            }




          })



      

        } else {
          console.log('登录失败！' + res.errMsg)
        }
      }
    })
  },



})