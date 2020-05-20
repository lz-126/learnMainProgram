// pages/home/home.js
// getApp()获取App()产生的实例对象
const app = getApp()
console.log(app.globalData.name);
console.log(app.globalData.age);
Page({
  // ---3.监听wxml中相关的一些事件---
  handleGetUserInfo(event){
    //点击获取用户信息
    console.log(event);
  },
  /**
   * 页面的初始数据
   */
  //  ---2初始化数据----
  data: {
    list:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  //onLoad(){}
  // ---1.监听页面的生命周期函数---
  onLoad: function (options) {
    // wx.request({
    //   //如果需要请求数据,需要进行相关配置
    //   //如果不进行配置,可以在详情种勾选不校验合法域名
    //   // url: 'http://127.0.0.1:3000/',
    //   success:(res)=>{
    //     console.log(res);
          // const data = res.data.list;
          // this.setData({
          //   list:data
          // })
    //   }
    // })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  // ---4.监听其他事件---
  onUnload: function (obj) {
    // console.log(obj);
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    console.log('下拉刷新事件');
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log('页面滚动到底部');
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})