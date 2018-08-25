const request = ({url, method, data, success}) => {
	wx.request({
	  url: url,
	  method: method,
	  data: data,
	  header: {
	  	'content-type': 'application/json'//默认json格式
	  },
	  success: success
	})
}

module.exports = request;