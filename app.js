App({

  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function (options) {
    //此处也可以获取小程序的进入场景
    console.log(options);
    
    console.log('小程序初始化完成:onLaunch');
    //发送网络请求
    //1-获取用户信息  (异步)  并将用户信息传入服务器
    wx.getUserInfo({//该接口可能会被废弃
      success: (res) => {
        console.log(res);
      },
    })
    // setTimeout(() => {
    //   //制造一个错误
    //   const err = new Error
    //   return err
    // }, 3000);
  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   * 会触发多次(如果需要某个事件重复执行...)
   */
  onShow: function (options) {
    console.log('界面显示出来:onShow');
    //判断小程序的进入场景
    console.log(options);
    switch (options.scene) {  
      //通过判断进入场景,做一些事情
      case 1001:
        break;
      case 1005:
        break;
      default:
        break;
    }
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

  },
  //定义一个全局数组可以在其他中使用
  globalData:{
    name:'codeWhy',
    age:18
  }
})
