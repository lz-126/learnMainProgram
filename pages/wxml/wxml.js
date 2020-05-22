// pages/wxml/wxml.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    message: "hello",
    firstName: "kobe",
    lastName: "bryant",
    age: 18,
    nowTime: new Date().toLocaleString(),
    isActive:false,
    isShow:true,
    score:90,
    movies:["十面埋伏","毒液","蜘蛛侠"],
    nums:[
      [0,1,2],
      [3,4,5],
      [6,7,8]
    ] ,
    letters:["a","b","c"]
  },
 
  handleSwitchColor() {
    this.setData({
      isActive:!this.data.isActive
    })
  },
  handleSwitchShow(){
    this.setData({
      isShow:!this.data.isShow
    })
  },
  hanleScroeAdd(){
    this.setData({
      score:((this.data.score += 6) >=120)? this.data.score=120:this.data.score
      
    })
  },
  hanleScroeSub(){
    this.setData({
      score:((this.data.score -= 6) <= 0)? this.data.score=0:this.data.score
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    setInterval(() => {
      this.setData({
        nowTime: new Date().toLocaleString()
      })
    }, 1000);
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
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})