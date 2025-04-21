const express = require('express');
const app = express();

//------------------------------------------------------------------------------------------------------------------------------------------------------
// app.method();
// app.get("/",(req,res)=>{
//     res.set("content-type","text/plain");
//     res.send("<h1>Hello</h1>");
// })
// app.get("/about",(req,res)=>{
    //     req.set("contant-type","text/html");
    //     res.write("HELLO");
    //     res.send();
// })
// app.listen(5504,()=>{
    //     console.log("Server Started");
// })
        
//------------------------------------------------------------------------------------------------------------------------------------------------------
// app.get('/calender/:day/event/:ename',(req,res)=>{
//     res.send(req.params);
// });
// app.listen(6001,()=>{
//     console.log("Server Started")
// })
//------------------------------------------------------------------------------------------------------------------------------------------------------
// Aim :- Write Express js script to request server to display jeson object on browser 
// student = {name:"lju",age:"20"}
// app.get("/",(req,res)=>{
//     // res.write(JSON.stringify(student));
//     // res.send();
//     // or
//     //res.send(student);
//     res.json(student)
// })
// app.listen(6007);
//      bane sathe che
// student = {name:"lju",age:"20"}
// app.get("/",(req,res)=>{
//     res.write(student.age+"");
//     res.send();
// })
// app.get("/a",(req,res)=>{
//     res.send(student.age);
// })
// app.get("/b",(req,res)=>{
//     res.json(student.age);
// })
// app.listen(6007);
//------------------------------------------------------------------------------------------------------------------------------------------------------
// Aim :- Write a Express js script to define 1 json array of 3 properties name,age,.Sort this obg according age if user request shorted name url then all names along with age should be printed acording to 
student = [{name : "Rudra" , age:"20"},{name : "Rahul" , age:"20"},{name : "Manav" , age:"22"}]
app.get("/",(req,res)=>{
    res.set("contant-type","text/html");
    res.send(student);
})
app.get("/sort",(req,res)=>{
    res.set("contant-type","text/html");
    var des = student.sort((a,b)=>b.age - a.age);
    res.send(des);
})
app.listen(6007)