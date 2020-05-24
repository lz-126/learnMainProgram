// pages/home/home.js
//导入请求
  import request from '../../service/network.js'
Page({
  data: {

  },
  
  onLoad:function(options){
    //1.原生方式发送网络请求
    this.get_data_origin()
    //使用封装的request方法获取网络请求
    //防止出现回调地狱
    request({
      url:"http://httpbin.org"
    }).then(res=>{
      console.log(res);
      
    }).catch(err=>{
      console.log(err);
      
    })
  
},
 
  get_data_origin(){
      //发送网络请求
      //01-最简单的get请求
      // wx.request({
      //   url:'http://httpbin.org',
      //   success:function(res){
      //     console.log(res);
      //   }
      // })
      //02-git请求 携带参数
      // wx.request({
      //   url: 'http://httpbin.org',
      //   data:{
      //     name:"codeWhy",
      //     age:18
      //  },
      //  success:function(res){
      //   console.log(res);
      //  }
      // })
      // 03- post请求 并携带参数
      // wx.request({
      //   url: 'http://httpbin.org/post',
      //   method:'post',  
      //   data:{
      //     name:"codeWhy",
      //     age:19
      //   },
      //   success:function(res){
      //     console.log(res);
      //   },
      //   fail:function(err){
      //     console.log(err);
          
      //   }
      // })

  },
  //
})