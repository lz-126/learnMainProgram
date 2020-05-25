// pages/detail/detail.js
Page({
  onLoad:function(options){
    //打印传递过来的数据
    console.log(options);
    
  },
  onUnload:function(){
    console.log("页面退出");
    //1.获取首页的页面对象
    //getCurrentPages当前所有的栈页面
    const pages=getCurrentPages()
    console.log(pages);
    //拿到首页页面对象
    const home = pages[pages.length-2]
    //修改首页title
    home.setData({
      title:'呵呵呵'
    })
  },
  hangleBackHome(){
    wx.navigateBack({
      delta:1
    })
  }
})