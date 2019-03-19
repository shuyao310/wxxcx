const express=require('express');
const cors=require('cors');
const session=require('express-session');
const bodyParser=require('body-parser');
//创建web服务器
var server=express();
server.listen(8080);
server.use(cors({
	'credentials':true,
	'origin':'*'
}));

// 使用 session 中间件
server.use(session({
    secret :  'secret', // 对session id 相关的cookie 进行签名
    resave : true,
    saveUninitialized: false, // 是否保存未初始化的会话
    cookie : {
        maxAge : 1000 * 60 * 3, // 设置 session 的有效时间，单位毫秒
    },
}));
//托管静态资源到public目录下
server.use(express.static('public'));
server.use(bodyParser.json());

//功能一：提供轮播图数据
app.get("/swiper",(res,req)=>{
  var swiperList=[
	  {code:1,img_url:"http://localhost:8080/alt.png"},
	  {code:2,img_url:"http://localhost:8080/lps.png"},
	  {code:3,img_url:"http://localhost:8080/jpdz.png"},
	  {code:4,img_url:"http://localhost:8080/xlgs.png"},
    ];
  res.send(swiperList)
})




























