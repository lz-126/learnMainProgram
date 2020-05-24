// components/my-props/my-props.js
 Component({
  properties:{
    title:{
      type:String,
      value:"默认标题",
      observer:function(newVal,oldVal){
        // console.log(newVal,oldVal);
      }
    }
  },
  externalClasses:['titleclass']
 })


  