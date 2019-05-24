const koa = require('koa');
const app = new koa();
const koabody = require('koa-body');
const router = require('koa-router')();
// const router = new Router();
const fs = require('fs');
const cors =require('koa2-cors');
app.use(koabody({
  multipart: true,
  formidable: {
    maxFileSize:200*1024*1024 
  }	
}))
// app.use(async ctx => {
//   ctx.body = 'hello world'
// })
app.use(cors({
    origin: function (ctx) {
        return ctx.header.origin;
    },
    exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
    maxAge: 5,
    credentials: true,
    allowMethods: ['GET', 'POST', 'DELETE'],
    allowHeaders: ['Content-Type', 'Authorization', 'Accept'],
}))
router.get('/',async (ctx)=>{
  ctx.body="首页";

})

router.post('/upload', async(ctx, next) => {
  debugger
 console.log('kill');
 const file = ctx.request.files.file; // 获取上传文件
 const reader = fs.createReadStream(file.path); // 创建可读流
 const ext = file.name.split('.').pop(); // 获取上传文件扩展名
 const upStream = fs.createWriteStream(`upload/${Math.random().toString()}.${ext}`); // 创建可写流
 reader.pipe(upStream); // 可读流通过管道写入可写流
 return ctx.body = '上传成功';
})

app.use(router.routes());   /*启动路由*/
app.listen(3000,() => {
  console.log('you application is running localhost:3000')

})

debugger


