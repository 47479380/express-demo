import express from "express"
//复制模板
const app=new express()



app.get("/", function (req, res,next) {
   // 调用错误
   next("hello error")
});


//自定义错误处理 要写在后面才有效果
app.use(function (err, req, res, next) {
    //error是next的参数
    console.error(err)
    res.status(404).send('Something broke!')
})


//监听端口 并启动
app.listen(3000,()=>{
    console.log("express启动成功端口: 3000")
})