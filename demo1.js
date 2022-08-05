import express from "express"

const app=new express()
//处理一个get请求
app.get("/",(request,response)=>{
    //获取get请求的参数
    const name=request.query.name
    let send="我不是张三"
    if (name==="张三"){
       // 响应一个文本
        send="我叫张三"
    }
    response.send(send)
})

//监听端口 并启动
app.listen(3000,()=>{
    console.log("express启动成功端口: 3000")
})