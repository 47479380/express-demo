import express from "express"

const app=new express()

// 处理get请求
app.get('/', function (req, res) {
    res.send('hello world')
})

// 处理post请求
app.post('/', function (req, res) {
    res.send('POST 请求处理')
})
//处理全部类型的请求
app.all('/secret', function (req, res, next) {
    console.log('Accessing the secret section ...')
    next() // pass control to the next handler
})

//路由参数 例:http://localhost:3000/users/123/books/2
app.get('/users/:userId/books/:bookId', function (req, res) {
    //req.params对象可以访问userId bookId这两个变量
    res.send(req.params)
})

//监听端口 并启动
app.listen(3000,()=>{
    console.log("express启动成功端口: 3000")
})