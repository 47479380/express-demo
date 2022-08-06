import express from "express"
const app=new express()


const Logger = function (req, res, next) {
    //在每个请求到来之前执行
    console.log('LOGGED')
    //给请求添加属性
    req.requestTime = Date.now()
    next()
}
//设置中间件
app.use(Logger)

app.get('/', function (req, res) {
    res.send('Hello World!')
})

//监听端口 并启动
app.listen(3000,()=>{
    console.log("express启动成功端口: 3000")
})