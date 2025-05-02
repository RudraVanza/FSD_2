// // npm install cookie-parser 
// var express = require("express");
// var app = express();
// var cp = require("cookie-parser");
// app.use(cp());
// app.get('/cookie',function(req,res){
//     res.cookie("name","express");
//     res.cookie("fname","JS");
//     res.cookie("lname","JSON");
//     res.cookie('Id','3',{expires : new Date(Date.now() + 1000)});
//     res.cookie('email',"er@gmail.com",{maxAge:2000})
//     res.clearCookie('fname');
//     const cookies = req.cookies;
//     res.send(cookies);
// })
// app.listen(3820);

var express = require("express");
var app = express();
var cp = require("cookie-parser");

app.use(cp());

app.get('/cookie', function (req, res) {
    // Set cookies BEFORE sending the response
    res.cookie("name", "express");
    res.cookie("fname", "JS");
    res.cookie("lname", "JSON");
    res.cookie("Id", "3", { expires: new Date(Date.now() + 1000) }); // 1s expiry
    res.cookie("email", "er@gmail.com", { maxAge: 2000 }); // 2s expiry
    res.clearCookie("fname"); // This will remove 'fname' cookie

    // Access and send cookies AFTER setting them
    const cookies = req.cookies;
    res.send({ message: "Cookies set and fname cleared", currentCookies: cookies });
});

app.listen(3820, () => {
    console.log("Server running on http://localhost:3820");
});


// Aim:- 1> Create one html file It includs oun form which contains fname ,lname ,pass & submit button       2> Once form is submited it stored all the entered cookies to the respected cookies to the next page the redirect user to admin page and clear the cookies set for the lname.display remaining set of cookies of values of this page using post method 

