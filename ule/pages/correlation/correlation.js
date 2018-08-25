const app = getApp();

Page({
	data: {
		
		zIndex: false,
		data: [{
			src: 'http://192.168.0.253:809/app/picture/year-member.png',
			text: '年卡会员'
		},{
			src: 'http://192.168.0.253:809/app/picture/equity.png',
			text: '会员权益'
		},{
			src: 'http://192.168.0.253:809/app/picture/ule.png',
			text: '关于年卡'
		}],
		autoPlay:[
			'http://192.168.0.253:809/app/picture/ule01.png',
			'http://192.168.0.253:809/app/picture/ule02.png',
			'http://192.168.0.253:809/app/picture/ule03.png',
			'http://192.168.0.253:809/app/picture/ule04.png'
		],
		imgSrc: [
			'http://192.168.0.253:809/app/picture/ule01.png',
			'http://192.168.0.253:809/app/picture/ule02.png',
			'http://192.168.0.253:809/app/picture/ule03.png',
			'http://192.168.0.253:809/app/picture/ule04.png'
		]
	},
	onLoad: function() {
		//更改页面底部的图片及字体样式
		this.footer = this.selectComponent("#footer");
		this.footer.setData({
			index: true,
			centre: false,
			corre: true,
			zIndex: false
		})
	}
})
