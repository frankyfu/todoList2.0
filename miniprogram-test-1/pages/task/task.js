const app=getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    taskTitle:'',
    taskContent:'',
  },

  save:function(){
    wx.setStorageSync('tasks', app.globalData.tasks);
    wx.setStorageSync('key', app.globalData.key);
  },

  typeContent:function(e){
    this.setData({
      taskContent:e.detail.value
    })
    this.save()
  },

  typeTitle:function(e){
    this.setData({
      taskTitle:e.detail.value
    })
    this.save()
  },


  addTask:function(){
    let key=app.globalData.key;

    let taskObj = {
      title:this.data.taskTitle,
      value:key,
      content:this.data.taskContent,
      status:false
    };

    key++;
    
    app.globalData.tasks.push(taskObj);

    this.setData({
      taskContent:'',
      taskTitle:'',
    })

    getApp().globalData.key=key;
    
    this.save();
  },


  back:function(){
    this.addTask();
    wx.navigateBack({
      delta:2
    })

    this.save;
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