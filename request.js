import express from "express"
import bodyParser  from "body-parser"
import multer from "multer"

const app=new express()
//解析post body 需要的中间件
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// // 通过 storage 选项来对 上传行为 进行定制化
const upload = new multer()
//    获取get请求参数
app.get("/a",(req,res)=>{
    //参数会绑定到req.query属性上
    res.send(req.query.name)
})
//    路径参数
app.get("/a/:id",(req,res)=>{
    //路径参数会绑定到req.params上
    res.send(req.params.id)
})
//    post参数
app.post("/a",(req,res)=>{
    //路径参数会绑定到req.body
    //只要是添加了json中间件 json参数也是同理
    res.send(req.body)
})

//上传单个文件
app.post('/singleUpload', upload.single('avatar'), function (req, res, next) {
    // {
    //     fieldname: 'avatar',
    //     originalname: 'avatar.jpg',
    //     encoding: 'binary',
    //     mimetype: '*/*',
    //     buffer: ....文件的数据,
    //     size: 38377
    //   }
    console.log(req.file);
    //如果文件上传的请求还携带了参数 就被被封装到body对象里
    console.log(req.body);
    res.end("上传成功");
});

//上传多个文件
app.post('/mulUpload', upload.array('avatar', 12), function (req, res, next) {
    //是个文件数组
    console.log(req.files);
    console.log(req.body);
    res.end("上传成功");
})

//监听端口 并启动
app.listen(3000,()=>{
    console.log("express启动成功端口: 3000")
})