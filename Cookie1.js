var express = require("express");
var app = express();
var cp = require("cookie-parser");
app.use(cp());
app.use(express.urlencoded());
app.post("/next", (req, res)=>{
    res.cookie("fname", req.body.fname);
    res.cookie("lname", req.body.lname);
    res.cookie("password", req.body.password);
    res.redirect("/admin");
})