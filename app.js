  const TOKEN = token
App({
  //对象中的数据会在小程序关闭后被回收,(被放在内存中 ,所以要进行本地存储)
  globaldata:{
    token:'wx49321a001c332e32'
  },
  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function () {
    //1.先从缓存中取出token
    const token=  wx.getStorageSync(TOKEN)
    //1.1判断token有没有值
    if(token && token>length !==0 ){//已经有token,
      //验证token是否过期
      // this.check_token(token)
    }else{//没有token
      this.login()
    }
  },
  // check_token(token){
  //   //调用验证接口
  //   wx.request({
  //     url: 'http://127.0.0.1:3000',
  //     // method:post,
  //     header:{
  //       token
  //     },
  //     success:(res)=>{
  //       console.log(res);
  //       if(!res.data.errCode){
  //         this.globaldata.token=token
  //       }else{
            // this.login()
            // }
        
  //     },
  //     fail:err=>{
  //       console.log(err);
        
  //     }
  //   })
  // },
  login(){
    //登录操作
 wx.login({
   complete: (res) => {
     console.log(res);
     //1.获取code
     const code = res.data;
     //将code发送给我们的服务器
     wx.request({
       url: 'http://127.0.0.1:3000',
       data:{
         code
       },
     success:(res)=>{
       console.log(res);
       //1获取code
       const token = res.data.token
       //2将token保存在globalData
       // this.globaldata.token = token
       console.log(this.globaldata.token );
       //3进行本地存储
       wx.setStorageSync(TOKEN,this.globaldata.token)
       
     }
     })
     
   },
 })
 }

  
})
