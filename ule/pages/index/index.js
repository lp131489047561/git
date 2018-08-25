const app = getApp();

Page({
	data: {
		user: false,
		isSaoMa: false,
		index: false,
		centre: false,
		corre: false
	},
	saoma: function() {
		if(this.user === true) {
			console.log("打开了扫码功能")
			this.setData({
				isSaoMa: false
			})
		}else {
			console.log("请注册")
			this.setData({
				isSaoMa: true
			})
		}
	},
	hindWindow: function() {
		this.setData({
			isSaoMa: false
		})
	},
	toLogin: function() {
		wx.navigateTo({
			url: "/pages/login/login"
		})
	},
	centreEvent: function() {
		wx.redirectTo({
			url: '/pages/centre/centre'
		})
	},
	correEvent: function() {
		wx.redirectTo({
  			url: '/pages/correlation/correlation'
		})
	}
})
