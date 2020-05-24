// pages/home/home.js
Page({

  data: {

  },
  handleShowToast(){
    wx.showToast({
      title: '加载中...',
      duration:3000,
      icon:"loading",
      mask:true,
      success:function(){
        console.log("展示弹窗成功");
      },
      fail:function(){
        console.log("展示弹窗失败");
      }
    })
  },
  handleShowModal(){
    wx.showModal({
      cancelColor: 'cancelColor',
      title:'我是标题',
      content:'我是内容,哈哈哈',
      // showCancel:false,
      cancelText:"退出",
      success:function(res){
        console.log(res);
        if(res.cancel){
          console.log("用户点击了取消");
        }
        if(res.confirm){
          console.log("用户点击了确定");
          
        }
        
      }
    })
  },
  handleShowLoading(){
    wx.showLoading({
      title: '加载....',
      mask:true,
    }),
    setTimeout(() => {
      //必须手动hideLoading才会让loading消失
        wx.hideLoading({
          complete: (res) => {
            console.log(res);
          },
        })
    }, 1000);
  },
  handleSwActiohon(){
   wx.showActionSheet({
     itemList: ['相册','拍照'],
     itemColor:'red',
     success:function(res){
      console.log(res);
      switch (res.tapIndex) {
        case 0:
          console.log('相册');
          break;
        case 1:
          console.log('拍照');
          break;
      }
     }

   })
  },
  onShareAppMessage(options){
    return {
      title:"你好,xxx",
      // path:"",
      imageUrl:'https://res.wx.qq.com/wxdoc/dist/assets/img/0.4cb08bb4.jpg'
    }
  }
})