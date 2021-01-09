const express= require("express");
const dotenv=require("dotenv");
const morgan=require("morgan");
const bodyparser=require("body-parser");
const path=require("path");
require("./server/database/connection");


const app=express();
dotenv.config({path:'config.env'})

const port =process.env.PORT ||8080;
//log request
app.use(morgan('tiny'));


//pass request to body parser
app.use(bodyparser.urlencoded({extended:true}))

//set view engine

app.set("view engine","ejs")
//app.set("views",path.resolve(__dirname,"views/ejs"))  if we add any specific folder under in views folder then this code will run.

//load assets (sonu when u will here pls read comment
app.use('/css',express.static(path.resolve(__dirname,"assets/css")))
//we can use css/style.css in place of crudapp/assets/css/style.css
app.use('/img',express.static(path.resolve(__dirname,"assets/img")))
app.use('/js',express.static(path.resolve(__dirname,"assets/js")))

//load routers 
app.use('/',require('./server/routes/router'))


app.listen(port, ()=>{
    console.log(`server is running at port no ${port}`);
})
