// // var express = require("express");
// // var app = express();
// // var cp = require("cookie-parser");

// // app.use(cp());

// // app.get('/cookie', function (req, res) {
// //     // Set cookies BEFORE sending the response
// //     res.cookie("name", "express");
// //     res.cookie("fname", "JS");
// //     res.cookie("lname", "JSON");
// //     res.cookie("Id", "3", { expires: new Date(Date.now() + 1000) }); // 1s expiry
// //     res.cookie("email", "er@gmail.com", { maxAge: 2000 }); // 2s expiry
// //     res.clearCookie("fname"); // This will remove 'fname' cookie

// //     // Access and send cookies AFTER setting them
// //     const cookies = req.cookies;
// //     res.send({ message: "Cookies set and fname cleared", currentCookies: cookies });
// // });

// // app.listen(3820, () => {
// //     console.log("Server running on http://localhost:3820");
// // });


// // Aim:- 1> Create one html file It includs oun form which contains fname ,lname ,pass & submit button       2> Once form is submited it stored all the entered cookies to the respected cookies to the next page the redirect user to admin page and clear the cookies set for the lname.display remaining set of cookies of values of this page using post method
// // var express = require("express");
// // var app = express();
// // var cp = require("cookie-parser");
// // app.use(cp());
// // app.use(express.static(__dirname,{index:"Cookie1.html"}));
// // app.use(express.urlencoded());
// // app.post("/next", (req, res)=>{
// //     res.cookie("fname", req.body.fname);
// //     res.cookie("lname", req.body.lname);
// //     res.cookie("password", req.body.password);
// //     res.redirect("/admin");
// // })
// // app.get("/admin", (req, res) => {
// //     res.clearCookie('lname');
// //     res.write("Welcome :- " + req.cookies.fname);
// //     res.write("LName :- " + req.cookies.lname);
// //     res.write("Password :- " + req.cookies.password);
// //     res.send();
// // })
// // app.listen(6960);


// // <!--Aim 2> Create a form with name , email , messages , and reating (sed , avg , good , execalent) -->
// var express = require("express");
// var app = express();
// var cp = require("cookie-parser");
// app.use(cp());
// app.use(express.static(__dirname,{index:"Cookie1.html"}));
// app.use(express.urlencoded());
// app.post("/submit-feed", (res, req) => {
//     const { name, email, message, rating } = req.body;
//     const feedback = { name, email, message, rating };
//     res.cookies("feedback", feedback, { maxAge: 10000 });
//     res.send('Thank You <a href = "/fee_detail">Show</a>');
// })
// app.get("/fee_detail", (req, res) => {
//     const feedback = req.cookies.feedback;
//     if (feedback) {
//         res.send('<h1>Name : ${feedback.name}</h1>');
//         res.send('<h1>Rating : ${feedback.rating}</h1><a href = "/" > Logout</a>');
//     } else {
//         res.send("No Feedback");
//     }
// })
// app.listen(4632);
var express = require("express");
var app = express();
var cp = require("cookie-parser");
app.use(cp());
app.use(express.static(__dirname, { index: "Cookie1.html" }));
app.use(express.urlencoded({ extended: true }));

// Handling form submission for feedback
app.post("/submit-feed", (req, res) => {
    const { name, email, message, rating } = req.body;
    const feedback = { name, email, message, rating };
    
    // Store feedback in a cookie
    res.cookie("feedback", JSON.stringify(feedback), { maxAge: 10000 });

    res.send('Thank You! <a href="/fee_detail">Show</a>');
});

// Display feedback stored in cookies
app.get("/fee_detail", (req, res) => {
    const feedback = req.cookies.feedback;

    if (feedback) {
        const parsedFeedback = JSON.parse(feedback);
        res.send(`
            <h1>Name: ${parsedFeedback.name}</h1>
            <h1>Rating: ${parsedFeedback.rating}</h1>
            <a href="/">Logout</a>
        `);
    } else {
        res.send("No Feedback");
    }
});

// Start server
app.listen(4632, () => {
    console.log("Server running on http://localhost:4632");
});
