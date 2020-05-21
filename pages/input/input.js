// pages/input/input.js
Page({
  bindInput(event){
    console.log("用户输入内容:",event);
  },
  bindFocus(event){
    console.log("用户获取焦点:",event);
  },
  bindBlur(event){
    console.log("用户失去焦点:",event);
  },
  /**
   * 页面的初始数据
   */
  data: {

  },

  
})