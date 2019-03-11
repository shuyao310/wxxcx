// pages/posts/posts.js
var postsData=require('../../data/posts-data.js')  //引入需要的文件(模拟数据文件)，只能用相对的路径

Page({

  /**
   * 页面的初始数据
   */
  data: {
    postList:[]
  },
  onPostTop:function(event){
    var postId = event.currentTarget.dataset.postid;  //通过event获取自定义属性
    wx.navigateTo({
      url: 'post-detail/post-detail?id='+postId,  //传递参数
    })
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
     this.setData({
       postList: postsData.postList
      });
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