// pages/home/home.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    titles:["衣服","裤子","鞋子"]
  },
  //传参数
  handleItemClick(event){
    console.log(event);
    const dataset = event.currentTarget.dataset
    const title = dataset.item
    const index = dataset.index
    console.log(title,index);
    
  },
  //事件冒泡&事件捕获
  handleCaptureView1(){
    console.log("捕获1");
    
  },
  handleBindView1(){
    console.log("冒泡1");
    
  },
  handleCaptureView2(){
    console.log("捕获2");
    
  },
  handleBindView2(){
    console.log("冒泡2");
    
  },
  handleCaptureView3(){
    console.log("捕获3");
    
  },
  handleBindView3(){
    console.log("冒泡3");
    
  },
  
  handleBtnClick(){
    console.log("发生点击");
  },
  handleTouchstart(){  
    console.log("// 触摸开始");    
  },
  handleTouchmove(){  
    console.log(" //触摸移动");
  },
  handleTouchcancel(){    
    console.log("//触摸被打断,如来电提醒,弹窗");
  },
  handleTouchend(){    
    console.log("//触摸结束");
  },
  handleTap(){    
    console.log("//短触摸");
  },
  handleLongpress(){    
    console.log("//触摸350ms后离开");
  },
  handleLongtap(){
    console.log("//长触摸");    
  },
  handleEventClick(event){
    console.log("发生点击",event);
  },
  

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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