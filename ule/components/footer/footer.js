Component({
  options: {
    multipleSlots: true
  },
  //组件的属性列表
  properties: {
  },
  data: {
  	title: {index: '首页',centre: '个人中心', corre: '关于U乐'},
    index: false,
		centre: false,
		corre: false
  },
  methods: {
  	indexEvent: function() {
		wx.redirectTo({
			url: '/pages/index/index'
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
 }
})