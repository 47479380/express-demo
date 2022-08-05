import express from "express"
//复制模板
const app=new express()


//监听端口 并启动
app.listen(3000,()=>{
    console.log("express启动成功端口: 3000")
})