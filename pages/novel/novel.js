// pages/novel/novel.js
// import '../../css/common/foot.css'
const swiper = require('../../js/swiper.min.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    novelList:[
      { name: "聊斋新说", date: "2018-01-01" },
      { name: "血雨江湖",  date:"2019-01-01"},
      { name: "曾经沧海难为水", date: "2020-01-01" },
    ],
    novelListType: [
      { name: "推荐", date: "2018-01-01" },
      { name: "热门", date: "2019-01-01" },
      { name: "武侠", date: "2020-01-01" },
    ],
  },
  //事件处理函数
  bindFootTab1: function () {
    // wx.redirectTo({
    //   url: '../novel/novel'
    // })
  },
  bindFootTab2: function () {
    wx.redirectTo({
      url: '../music/music'
    })
  },
  bindFootTab3: function () {
    wx.redirectTo({
      url: '../video/video'
    })
  },
  bindFootTab4: function () {
    wx.redirectTo({
      url: '../my/my'
    })
  },
  bindNovelList: function(){
    wx.navigateTo({
      url: '../novelDetail/novelDetial'
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})