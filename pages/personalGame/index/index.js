//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    //app.globalData.userInfo = e.detail.userInfo
    app.login();
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },


  toIntroduction:function(){
    console.log("to introduction")
    wx.navigateTo({
      url: '/pages/others/introduction/introduction'
    })
  },

  toSettings:function(){
    console.log("to settings")
    wx.navigateTo({
      url: '/pages/others/settings/settings'
    })
  },

  toHistory:function(){
    console.log("to history")
    wx.navigateTo({
      url: '/pages/others/history/history'
    })
  },

  toRank:function(){
    console.log("to rank")
    wx.navigateTo({
      url: '/pages/others/rank/rank'
    })
  },

  toAward:function(){
    console.log("to award")
    wx.navigateTo({
      url: '/pages/others/award/award'
    })
  },

  toArena:function(){
    console.log("to award")
    wx.navigateTo({
      url: '/pages/arena/arenaIndex/arenaIndex'
    })
  },

})
