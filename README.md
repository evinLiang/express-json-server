# express-json-server
express+json-server搭建简单json服务器，实现增删改查

##### 安装experss
`cnpm install express --save`

##### 安装experss
`cnpm install express-json-server --save`

##### 新建app.js并且配置
`const path = require('path');	
const express = require('express');
const autoController = require('express-json-server');
const app = express();
autoController(app, path.join(__dirname, 'db'));	//json-server 配置
app.listen(3000);
`

##### db/index.js 的配置 //json-server 配置文件
`// db/index.js
module.exports = {
  delay: 500,                 // 响应延迟(ms), 可选, 默认0
  // foreignKeySuffix: 'Id',  // 外键后缀, 可选, 默认'Id', 'userId'则外键关联user表的id,
  // id: 'id',                // 数据id, 可选, 默认'id'
  json: 'db.json',            // json数据存储到文件中, 可选, 默认直接返回js生成的动态数据
  // jsonSpaces: 2,           // json缩进空格数, 可选, 默认2
  // middlewares: [],         // 中间件列表, 可选
  // noCors: false,           // 禁止跨域访问, 可选, 默认false不禁止
  // noGzip: false,           // 禁止压缩传输, 可选, 默认false不禁止
  // readOnly: false,         // 只读模式, 可选, 默认false非只读
  // route: '/api',           // 挂载到express下的路由, 可选, 默认'/api', 则访问路径为'/api/${table}' 
  // 路由别名, 可选
  // routes: {
  //   '/companies': '/companies',
  //   '/member': '/user',
  // }, 
  // 表数据, 必须
  tables: {
    user: require('./user'),		//例子user的数据
  }, 
};`

##### user.js 例子
`module.exports = [
	{
		"name":"Henry",
		"phone":"333-444-555",
		"email":"Henry@gmail.com",
		"id":1,
		"age":30,
		"companyId":1
	},
	{
		"name":"kobe",
		"phone":"333-444-556",
		"email":"kobe@gmail.com",
		"id":2,
		"age":34,
		"companyId":2
	},
	{
		"name":"james",
		"phone":"333-444-557",
		"email":"james@gmail.com",
		"id":3,
		"age":28,
		"companyId":3
	},
	{
		"name":"wade",
		"phone":"333-444-558",
		"email":"wade@gmail.com",
		"id":4,
		"age":50,
		"companyId":3
	}
]`

##### 启动
`node app.js`

##### 浏览器打开预览
`localhost:3000/api/user`