const app = getApp();

Page({
	data: {
		userHeadIcon: 'http://192.168.0.253:809/app/picture/centre_gray.png',
		userName: '用户',
		userId: '520',
		data: [{
			src: 'http://192.168.0.253:809/app/picture/agency.png',
			sanJiaoSrc: 'http://192.168.0.253:809/app/picture/sanjiao.png',
			text: '分销中心',
			clas: 'same-name agency',
			titleClas: 'item-name'
		},{
			src: 'http://192.168.0.253:809/app/picture/red-packet.png',
			sanJiaoSrc: 'http://192.168.0.253:809/app/picture/sanjiao.png',
			text: '我的红包',
			clas: 'same-name',
			titleClas: 'item-name'
		},{
			src: 'http://192.168.0.253:809/app/picture/gift.png',
			sanJiaoSrc: 'http://192.168.0.253:809/app/picture/sanjiao.png',
			text: '我的礼品',
			clas: 'same-name',
			titleClas: 'item-name'
		},{
			src: 'http://192.168.0.253:809/app/picture/issut.png',
			sanJiaoSrc: 'http://192.168.0.253:809/app/picture/sanjiao.png',
			text: '常见问题',
			clas: 'same-name',
			titleClas: 'item-name'
		},{
			src: 'http://192.168.0.253:809/app/picture/site.png',
			sanJiaoSrc: 'http://192.168.0.253:809/app/picture/sanjiao.png',
			text: '地址管理',
			clas: 'same-name',
			titleClas: 'item-name'
		},{
			src: 'http://192.168.0.253:809/app/picture/phone.png',
			text: '联系我们',
			clas: 'same-name',
			titleClas: 'item-name',
			num: '400-123-4568'
		},{
			src: 'http://192.168.0.253:809/app/picture/staff-inlet.png',
			sanJiaoSrc: 'http://192.168.0.253:809/app/picture/sanjiao.png',
			text: '工作人员入口',
			clas: 'same-name',
			titleClas: 'item-name staff-inlet'
		}]
	},
	onLoad:function() {
		//更改页面底部的图片及字体样式
		this.footer = this.selectComponent("#footer");
		this.footer.setData({
			index: true,
			centre: true,
			corre: false
		})
		let self = this;
		//从本地获取用户信息
		wx.getStorage({
		  key: 'userInfo',
		  success: function(res) {
		  	self.setData({
		  		userHeadIcon: res.data.userHeadIcon,
		  		userName: res.data.userName,
		  		userId: res.data.userId
		  	})
		  } 
		})
	}
})
