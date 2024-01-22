const express= require("express");
const bodyParser = require("body-parser");
const app = express();
app.set('view engine','ejs');
app.use(bodyParser.urlencoded({ extended:false }));
let item=[];
var a = 3+4;
var today=new Date();
app.get("/",function(req, res){
    res.render("index",{newItem:item});
});
app.use(express.static("public"));
app.post("/",function(req, res){
    // console.log(req.body);
    item.push(req.body.newItem);
    res.redirect("/");
});
app.listen(3000,function(){
    console.log("The server has been run on localhost:3000");
})