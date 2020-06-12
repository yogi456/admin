const express = require('express');
const bodyparser = require('body-parser');

const app = express();
var x= "";
 var y ="";
 var z="";
 var p ="";
 var q ="";
 var r ="";
 var t = "";
 var u = "";
 var g="";
 var h ="";
 var m = "";
app.set("view engine","ejs");
app.use(bodyparser.urlencoded({extended:true}));

app.get("/",function(req,res){
 
    res.render("admin");

})
app.post("/request",function(req,res){
     x = req.body.fname;
     p = req.body.faculty1;
     q= req.body.faculty2;
     r = req.body.faculty3;
     t=req.body.faculty4;
     u = req.body.faculty5;
     console.log(p);
     
    res.render("request",{facname:x,fac5:u,fac1:p,fac2:q,fac3:r,fac4:t});

})

app.post("/faculty",function(req,res){
      y= req.body.acc;
      z = req.body.rej;
      res.redirect("/faculty");
    
})
app.get("/faculty",function(req,res){
    res.render("faculty",{ress:y,resss:z});
})
app.get("/teachers",function(req,res){
    res.render("teachers");
})
app.get("/fac1",function(req,res){
    res.render("fac1",{ress:g,resss:h,itt:m,add:p});
})



app.post("/fac1",function(req,res){
    g = req.body.acc;
    h = req.body.rej;
    m = req.body.file1;
    res.redirect("/fac1");
})
app.listen(3001,function(req,res){
    console.log("Server is started at 3000");
})