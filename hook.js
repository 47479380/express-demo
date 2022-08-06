import express from "express"
const app=new express()



//设置中间件
app.use(function (req, res, next) {
    //在每个请求到来之前执行
    console.log('LOGGED')
    //给请求添加属性
    req.requestTime = Date.now()
    next()
})

//设置匹配/user/:id的中间件
app.use("/user/:id",function (req, res, next) {
    console.log('Request Type', req.method);  // GET
    next()
})
//设置多个函数的中间件
app.get('/user/:id', (req, res, next) => {
    //跳转到执行请求的方法上
    if (req.params.id === '0') next('route');
    else next();
}, function (req, res, next) {
    //跳转到express.Router上
    if (req.params.id === '1') next('router');
    else next();
},function (req,res,next) {
    //如果next参数传的是除了route和router之外的,都会跳转到错误处理的中间件
    if (req.params.id === '2') next('abc');
    else next();
})
app.get('/user/:id', function (req, res, next) {
    res.send('special');
})
app.get('/', function (req, res) {
    res.send('Hello World!')
})

//监听端口 并启动
app.listen(3000,()=>{
    console.log("express启动成功端口: 3000")
})