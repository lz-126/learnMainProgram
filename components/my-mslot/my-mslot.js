// components/my-mslot/my-mslot.js
Component({
  //定义组件的配置选项
  //multipleSlots:在使用多插槽时需要设置为true
  //styleIsolation:设置样式的隔离方式
  options: {
    //多插槽使用
    multipleSlots: true,
  },

  //外界给组件传入额外的样式
  // externalClasses: [],

  //使用者可以给组件传入数据
  properties: {
    title: {
      type: String,
      value: '',
      observer: function (newVal, oldVal) {
        console.log(newVal);
      }
    }
  },

  //用于定义组件内部的函数
  methods: {
  },
  //可以监听数据的改变properties/data
  observers: {
    counter: function (newVal) {
      console.log(newVal);
    }
  },
  //------------组件中监听生命周期函数--------------
  //01-监听所在页面的生命周期
  pageLifetimes: {
    show() {
      console.log("监听组件在所在页面显示");
    },
    hide() {
      console.log("监听组件所在页面隐藏起来");
    },
    resize() {
      console.log("监听页面尺寸改变");
    }
  },
  // 02-监听组件本身的生命周期函数
  lifetimes: {
    created() {
      console.log("组件被创建");
    },
    attached() {
      console.log("组件被添加到页面");
    },
    ready() {
      console.log("组件被渲染出来");
    },
    moved() {
      console.log("组件被移动到另一个节点");
    },
    detached() {
      console.log("组件被移除");
    }
  }
})
