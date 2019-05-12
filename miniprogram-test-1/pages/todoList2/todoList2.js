const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    tasks:[],
  },


  save: function () {
    wx.setStorageSync('tasks', app.globalData.tasks);
    wx.setStorageSync('key', app.globalData.key);
  },


  load: function () {
    var tasks = wx.getStorageSync('tasks');
    this.setData({
        tasks: tasks
    })
  },


  changeTaskStatus: function (e) {
    let value = e.currentTarget.dataset.value;

    let tasks = app.globalData.tasks;

    let index = tasks.findIndex(task => task.value == value);

    if (index < 0) {
      return;
    }

    tasks[index].status = !tasks[index].status;

    this.setData({
      tasks: tasks
    });

    app.globalData.tasks = tasks;

    this.save();
  },



  removeTask: function (e) {
    let value = e.currentTarget.dataset.value;

    let tasks = this.data.tasks;

    let newTasks = tasks.filter(task => task.value != value);

    app.globalData.tasks = newTasks;

    this.setData({
      tasks:newTasks
    })

  },

  changeToTask: function () {
    wx.navigateTo({
      url: '../task/task',
    })
  },


  details:function(e){
    app.globalData.detailValue = e.currentTarget.dataset.value;

    let value = app.globalData.detailValue;

    wx.navigateTo({
      url: '../detail/detail',
    })
  },


  /**
  * 生命周期函数--监听页面加载
  */
  onLoad: function () {
    this.load()
    this.setData({
      tasks:app.globalData.tasks
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      tasks: app.globalData.tasks
    })
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
    this.setData({
      tasks: app.globalData.tasks
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