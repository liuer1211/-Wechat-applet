// pages/video/video.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  //事件处理函数
  bindFootTab1: function () {
    wx.redirectTo({
      url: '../novel/novel'
    })
  },
  bindFootTab2: function () {
    wx.redirectTo({
      url: '../music/music'
    })
  },
  bindFootTab3: function () {
    // wx.redirectTo({
    //   url: '../video/video'
    // })
  },
  bindFootTab4: function () {
    wx.redirectTo({
      url: '../my/my'
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