const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    taskContent:'',
    taskTitle:'',
    index:0
  },

  save:function(){
    wx.setStorageSync('tasks', app.globalData.tasks);
    wx.setStorageSync('key', app.globalData.key);
  },

  changeContent:function(e){
    let taskContent = e.detail.value;
    app.globalData.tasks[this.data.index].content = taskContent;
    this.setData({
      taskContent:taskContent
    })
    this.save();
  },


  changeTitle: function (e) {
    let taskTitle = e.detail.value;
    app.globalData.tasks[this.data.index].title = taskTitle;
    this.setData({
      taskTitle: taskTitle
    })
    this.save();
  },

  back:function(){
    wx.navigateBack({
      delta: 2
    })
    this.save();
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
    let tasks = app.globalData.tasks;
    let value = app.globalData.detailValue;
    let index = tasks.findIndex(task => task.value == value);
    this.setData({
      index:index,
      taskContent:app.globalData.tasks[index].content,
      taskTitle: app.globalData.tasks[index].title,
    })
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