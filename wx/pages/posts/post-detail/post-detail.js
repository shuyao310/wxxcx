// pages/posts/post-detail/post-detail.js
var postsData = require('../../../data/posts-data.js')  //引入需要的文件(模拟数据文件)，只能用相对的路径
Page({

  /**
   * 页面的初始数据
   */
  data: {
    postData:"",
    currentPostId:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //接受posts传来的参数
    var postId=options.id;
    this.setData({
      currentPostId: postId
    })
    // 声明一个变量来接收每一个id所对应的数据
    var postData=postsData.postList[postId]
    //将数据绑定到data中
    this.setData({
      postData: postData
    })
   
  //  文章是否被收藏
    var postsCollected = wx.getStorageSync('posts_Collected') //拿到所有缓存的值
    if (postsCollected) {  
       var postCollected = postsCollected[postId] //获取当前文章的id，查询缓存
       this.setData({
         collected: postCollected  //获取玩当前id的缓存状态后，将data值更新
       })
    }else{ //如果拿不到缓存的值，就设置缓存，并将当前id所在赋值未false
      var postsCollected={}
      postsCollected[postId]=false;
      wx.setStorageSync('posts_Collected', postsCollected)
    }


  },

//  给收藏图标绑定事件
  onCollectionTap:function(event){
    var postsCollected = wx.getStorageSync('posts_Collected');//先获取当前所有缓存
    var postCollected = postsCollected[this.data.currentPostId]; //获取当前页posts_Collected缓存状态
    console.log(postsCollected)
    postCollected = !postCollected ; //取反，收藏变为收藏，未收藏变收藏，真为假，假为真
    postsCollected[this.data.currentPostId] = postCollected  //更改状态后，将状态赋值给posts_Collected 
    wx.setStorageSync('posts_Collected', postsCollected)  //更新缓存
    // 再将数据绑定进行更新
    this.setData({
      collected: postCollected
    })
  },





  /*
  //  如何设置缓存 wx.setStorageSync同步方法 ，wx.setStorage异步方法  缓存最大上线不能超过10M
    // wx.setStorageSync('key', 'value')设置缓存
    wx.setStorageSync('key', {  //修改缓存，key保持一致
      game:"111",
      deveplay:"555"
    })


  },

//  获取缓存变量-----绑定一个点击事件
  onCollectionTap:function(event){
    var game=wx.getStorageSync('key')
    console.log(game)
  },
// 删除一个缓存
  onShareTap:function(){
    wx.removeStorageSync('key') //清除指定缓存
    wx.clearStorageSync()  //清除所有缓存
  }*/





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