// pages/home/home.js
import { getMultData,getGoodsData } from "../../service/home"

const types=['pop','new','sell']
const TOP_DISTANCE = 1000
Page({
  data: {
    banners:[],
    recommends:[],
    titles:['流行','新款','精选'],
    goods:{
      'pop':{page:0,list:[]},
      'new':{page:0,list:[]},
      'sell':{page:0,list:[]}
    },
    currentType:'pop' ,
    showBackTop:false,
    isTabFixed:false,
    tapScrollTop:0
  },

  onLoad: function (options) {
    //1.请求轮播图,推荐数据
    this._getMultData(),
    //2.请求商品
    this._getGoodsData('pop'),
    this._getGoodsData('new'),
    this._getGoodsData('sell')

  },
  // ------------网络请求数据--------------
  _getMultData(){
    getMultData().then(res => {
      // console.log(res); 
      const banners = res.data.data.banner.list;
      const recommends = res.data.data.recommend.list;
      // console.log(banners,recommends);
      //将banners和recommends 放入data
      this.setData({
        banners,
        recommends,
        titles:['流行','新款','精选'],
        goods:{
          "pop":{page:0,list:[]},
          "new":{page:0,list:[]},
          "sell":{page:0,list:[]}
        }
      })  
    })
  },
  _getGoodsData(type){
    //1.获取页码
    const page = this.data.goods[type].page+1;
    //2.发送网络请求
    getGoodsData(type,page).then(res=>{
      // console.log(res)
      //2.1.取出数据
      const list = res.data.data.list;
      //2.2.将数据设置到对应的type的this中
      const oldList = this.data.goods[type].list;
      oldList.push(...list);
      //2.3.将数据设置到data中的goods
      const typeKey = `goods.${type}.list`
      const pageKey = `goos.${type}.page`
      this.setData({
        [typeKey]:oldList,
        [pageKey]:page
      })

    })
  },
  // ----------事件监听函数-----------
  handleTabClick(event){
    // console.log(event);
    //1.取出index
    const index = event.detail.index
    //2.设置currentType 
    this.setData({
      currentType:types[index]
    })
  },
  handleImageLoad(){
    console.log('图片加载完成');
    wx.createSelectorQuery().select('#tab-control').boundingClientRect(rect=>{
      this.data.tapScrollTop=rect.top
    }).exec()
  },
  onReachBottom:function(){
    //上拉加载更多
    this._getGoodsData(this.data.currentType)
  },
  onPageScroll:function(options){
    // console.log(options);
    //1.取出scrollTop
    const scrollTop = options.scrollTop;
    //修改showBackTop属性
    //官方：不要在滚动的函数中频繁调用setData
    const flag1 = scrollTop>=TOP_DISTANCE
    if(flag1 != this.data.showBackTop){
      this.setData({
      showBackTop:flag1
      })
    }
    //修改istabFixed
    const flag2 = scrollTop >= this.data.tapScrollTop
    if(flag2 != this.data.tapScrollTop){
      this.setData({
        isTabFixed:flag2
      })
    }

  }

})