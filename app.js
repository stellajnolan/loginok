require('dotenv').config()
const path=require('path')
const express=require('express')
const app=express()
app.use(express.urlencoded({extended:true}))
app.use(express.json())
const flash = require("express-flash");
const session = require("express-session");
app.use(flash())

app.use(session({
    secret: "secret key",
    resave: false,
    saveUninitialized: false,
  }));
  
app.use(express.static('public'));
app.set('view engine', 'ejs')
const expresslayouts = require('express-ejs-layouts')
const { ErrorHandler, NotFoundHandler } = require('./utility/error-handler')
app.use(expresslayouts)

  

app.set("layout extractStyles", true)
app.set("layout extractScripts", true)
app.set('layout',path.join(__dirname, 'views', 'layouts','main.ejs'))

const AllRoutes= require('./routes/index')

app.use(AllRoutes)



app.use(ErrorHandler)
app.use(NotFoundHandler)
app.listen(process.env.SERVER_PORT,()=>{
    console.log(`listenting on ${process.env.SERVER_PORT}`);
})