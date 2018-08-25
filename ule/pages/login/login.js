const request = require('../../utils/request');

Page({
  data: {
  	alterColor: false,
  	onOff: false,
  	codeName: '获取验证码',
  	alterLoginBtn: false,
  	numValue: '',
  	codeValue: ''
  },
	numberVerify: function(e) {
  	let value = e.detail.value;
  	let regExp = /^1[3|4|5|7|8]\d{9}$/;
  	let res = regExp.test(value);
  
  	//高亮‘获取验证码’颜色，否则不高亮
  	if(res === true && this.data.onOff === false && this.data.alterLoginBtn === false) {
			this.setData({
				alterColor: true,
				alterLoginBtn: true,
				numValue: value
			})
  	}else {
  		this.setData({
  			alterColor: false,
  			alterLoginBtn: false
  		})
  	}
  },
  codeVerify: function(e) {
  	let value = e.detail.value;
  	this.setData({
  		codeValue: value
  	})
  	if(value !== '' && this.data.alterColor === true) {
  		this.setData({
  			alterLoginBtn: true
  		})
  	}else {
  		this.setData({
  			alterLoginBtn: false
  		})
  	}
  },
  
  //点击“获取验证码”发送请求，获取验证码
  getCode: function() {
  	console.log('zhixig')
  	let self = this;
   	if(this.data.alterColor === true){
   		new Promise((resolve, reject) => {
   			//点击发送验证码后倒计时开始
				let num = 61;
	      let timer = setInterval(function () {
	        num--;
	        if (num <= 0) {
	          clearInterval(timer);
	          self.setData({
	            codeName: '重新发送',
	            alterColor: true,
	            onOff: false
	          })
	        }else {
	          self.setData({
	            codeName: num + '秒',
	            alterColor: false,
	            onOff: true
	          })
	        }
	      }, 1000);
				wx.getStorage({
				  key: 'userInfo',
				  success: function(res) {
				  	resolve(res.data.userId)
				  } 
				})
			}).then((userId) => {
				request({
					url: "http://192.168.0.253:809/app/app/sendSms",
					method: "GET",
					data: {
						userId: userId,
						phone: self.data.numValue
					},
					success: function(res) {
					}
				})
			})
  	}
  },
  
  //点击登录按钮，注册用户
  login: function() {
  	let self = this;
  	new Promise((resolve, reject) => {
			wx.getStorage({
			  key: 'userInfo',
			  success: function(res) {
			  	resolve(res.data.userId)
			  } 
			})
		}).then((userId) => {
			request({
				url: "http://192.168.0.253:809/app/user/userRegister",
				method: "POST",
				data: {
					smsCode: self.data.codeValue,
	    		userId: userId
				},
				success: function(res) {
					console.log(res)
					wx.navigateTo({
					  url: '/pages/index/index'
					})
				}
	  	})
		})
	}
})