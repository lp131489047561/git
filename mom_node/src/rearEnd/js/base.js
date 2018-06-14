var express = require('express');
var app = express();

//使用静态方法
app.use(express.static('../../frontEnd'));

//引入自定义模块
require('./pages-data.js').home(app);
require('./pages-data.js').goodsList(app);
require('./pages-data.js').details(app);
require('./pages-data.js').cart(app);

//设置监听端口
app.listen(1314);