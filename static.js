import express from "express"

const app=new express()
//设置静态文件目录
app.use(express.static("static"))
//带url的静态文件映射
app.use('/static', express.static('static'))
//监听端口 并启动
app.listen(3000,()=>{
    console.log("express启动成功端口: 3000")
})