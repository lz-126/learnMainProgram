// pages/image/image.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imagePath:''
  },
  handleChooseAlbum(){
    wx.chooseImage({
      success: (res) => {
        // console.log(res);
        // 1.取出路径
        const path = res.tempFilePaths[0]
        // 2.设置imagePath
        this.setData({
          imagePath:path
        })
      },
    })
  },
  handleImageLoad(){
    console.log('图片加载完成');
  }
  
})