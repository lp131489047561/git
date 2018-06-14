var mongoDB = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017/";
 
function mongFn(table,callback){
  //连接mongoDB
  mongoDB.connect(url,function(err,client) {

      //连接数据库
      const db = client.db('mom-itme');

      //连接集合
      let collection = db.collection(table);

      //对集合进行增删改查
      callback(collection);
      
      //每查一次,关闭一次数据库
     //client.close();
  });
}

//把函数暴露出去
module.exports = {
    mongFn
}