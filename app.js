const path = require('path');	
const express = require('express');
const autoController = require('express-json-server');

const app = express();

autoController(app, path.join(__dirname, 'db'));	//json-server 配置文件
 
app.listen(3000);