var dataFromJs = require("../../data/data.js");
// pages/play/index.js
let musicPlay = wx.createInnerAudioContext();//建立好音乐播放实例
var timeOut = function() {
  console.log(musicPlay.currentTime);
  setTimeout(function() {
    timeOut();
  }, 1000);
};

Page({

  /**
   * 页面的初始数据
   */
  data: {
    musicId: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    if (Object.keys(options).length) { //Object.keys()返回属性名组成的数组，然后判断数组是否长度为0，如果是的话说明这个对象是空对象
      this.setData({
        musicId: options.musicId
      });
    };
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    if (this.data.musicId) {
      let musicId = this.data.musicId;
      let music = function() {
        for (let i = 0; i < dataFromJs.musicData.length; i++) {
          if (dataFromJs.musicData[i].id == musicId) {
            return dataFromJs.musicData[i];
          };
        };
      }();
      console.log(music);
      musicPlay.src = "http://10.2.44.198/study/weAPP/referTo163music/data/"+music.filename+".mp3";
      musicPlay.loop = true;
      musicPlay.play();
      timeOut();
      musicPlay.onPlay(() => {
        console.log(123);
      });
    };
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})