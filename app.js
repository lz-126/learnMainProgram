App({

  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function () {
    console.log('小程序初始化完成:onLaunch');
    //发送网络请求
    //获取用户信息  (异步)
    wx.getUserInfo({
      success: (res) => {
        console.log(res);
      },
    })
    setTimeout(() => {
      const err = new Error
      throw err
    }, 3000);
  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function (options) {
    console.log('界面显示出来:onShow');

  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {
    //一般小程序被隐藏后会在后台保持大概2小时
    console.log('界面被隐藏: onHide');
    
  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {
    console.log('当程序发生错误时回执行的: onError');
    
  }
})
