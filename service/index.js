const Koa=require("koa");
const Router=require("koa-router");
const Static=require("koa-static");
const path=require("path");

const server=new Koa;
const router=new Router;
const pub=Static(path.join(__dirname,"../public/"));

server.use(pub);
server.listen(3000);