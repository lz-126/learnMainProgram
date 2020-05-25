// pages/home/home.js
Page({

  data: {
    title:"哈哈哈哈"
  },
  handlePushDetail(){
    wx.navigateTo({
      url: '/pages/detail/detail?title=你好呀',
    })
    // wx.redirectTo({
    //   url: 'url',
    // })
    
  }
})