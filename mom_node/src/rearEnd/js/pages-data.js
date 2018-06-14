var mongoDB = require('../lib/mongoDb.js');

//首页
function home(app){
    app.get('/home',(req,res) => {

        //如果是首页,就执行以下操作
        if(req.query.type === 'home'){

            //执行mongoDB函数
            mongoDB.mongFn('shopData',function(collection){
                //查询私有属性后,转数组
                collection.find({siyou:'1'}).toArray(function(err,result){
                    if(err) throw err;
                    res.send(result);
                })
            })
        }
    })
}

//商品列表页
function goodsList(app){
    app.get('/goodsList',(req,res) => {
        //接受前端参数
        var page =  req.query.page? req.query.page : 1;
        var qty = req.query.qty? req.query.qty : 8;

        //如果是商品列表页,就执行以下操作
        if(req.query.type === 'goodsList'){

            //执行mongoDB函数
            mongoDB.mongFn('shopData',function(collection){
                collection.find({siyou:'7'}).toArray(function(err,result){
                    if (err) throw err;
                    //根据分页截取数据
                    var data = result.slice((page-1)*qty,qty*page);
                    //格式化数据
                    var obj = {
                        total:result.length,
                        page:page*1,
                        qty:qty*1,
                        data:data
                    }
                    res.send(obj);
                })
            })
        }
    })
}

//商品详情
function details(app){
    app.get('/details',(req,res) => {

        //如果是商品列表页,就根据id拿数据
        if(req.query.type === 'details'){
            mongoDB.mongFn('shopData',function(collection){
                collection.find({id:req.query.id*1}).toArray(function(err,result){
                    if (err) throw err;
                    res.send(result);
                })
            })
        }

        //将数据存入购物车数据表
        if(req.query.type === 'detaCart'){

            mongoDB.mongFn('shopCart',function(collection){
                collection.find({id:req.query.shopId*1}).toArray(function(err,result){
                    if (err) throw err;
                    console.log(result);
                    //如果没有就插入，否则修改
                    if(result[0] == null){
                        collection.insert({
                            id:req.query.shopId*1,
                            imgurl:req.query.imgurl,
                            name:req.query.name,
                            recommend:req.query.recommend,
                            num:req.query.num,
                            price:req.query.price,
                            total:req.query.total
                        });
                    }else{
                        collection.update({
                              id:req.query.shopId*1
                        }, {
                          $set: {
                            num: req.query.num,
                            total: req.query.total
                          }
                        });
                    }
                })
                
            })
        }
    })
}

//购物车
function cart(app){
    app.get('/cart',(req,res) => {
        //购物车初始数据
        if(req.query.type === 'cart'){
            mongoDB.mongFn('shopCart',function(collection){
                collection.find().toArray(function(err,result){
                    if (err) throw err;
                    res.send(result);
                })
            })
        }

        // //删除购物车商品
        if(req.query.type === 'cartDel'){
            mongoDB.mongFn('shopCart',function(collection){
                collection.remove({id:req.query.cartId*1}, function(err, result) {
                    res.send('删除成功');
                })
            })
        }
        //删除后重新渲染页面
        if(req.query.type === 'cartAnew'){
            console.log(req.query.type);
            mongoDB.mongFn('shopCart',function(collection){
                collection.find().toArray(function(err,result){
                    if (err) throw err;
                    console.log(result);
                    res.send(result);
                })
            })
        }
    })
}

//暴露出去
module.exports = {
    home,
    goodsList,
    details,
    cart
}