import express from "express"

const app = new express()
//下载文件
app.get("/download", (req, res) => {

    switch (req.query.mode) {
        case "1": {
            //指定文件的路径
            res.download("static/index.html")
            return
        }
        case "2": {
            //指定接受的文件名 Content-Disposition header “filename=filename”
            res.download("static", "index.html")
            return;
        }
        case "3": {
            //当发生错误或传输完成时调用回调函数
            res.download("static", "index.html", function (err) {
                if (err) {
                    res.send("下载错误")
                } else {
                    //    下载成功了
                }
            })
            return;
        }
        default: {
            res.download("static/index.html")
        }
    }
})

//结束响应过程。
app.get("/end", (req, res) => {
    //没有内容响应,可以调用end结束响应过程,让客户端不在等待响应
    res.status(Number(req.query.code)).end()
})

//响应json
app.get("/json", (req, res) => {
    res.json({
        name: req.query.name,
        age: Number(req.query.age)
    })
})

//重定向
app.get("/redirect", (_, res) => {
    res.redirect("https://www.google.com")
    // res.redirect(301,"https://www.google.com") 也可以设置状态码
})

//响应
app.get("/send", (req, res) => {
  const type= req.query.type
    if (type==="text"){
        //Content-Type to “text/html
        res.send("<h1>hello world</h1>")
    }else if (type==="buffer"){
        //“application/octet-stream” 文件下载差不多的意思
        res.send(Buffer.from('whoop'))
    }else if (type==="json"){
        res.send([1, 2, 3])
    }else {
        res.status(404).end()
    }

})
//监听端口 并启动
app.listen(3000, () => {
    console.log("express启动成功端口: 3000")
})