// npm install express -session

//Aim :-  Write express js script using session to display how many times a user visited a website, if user is visiting a website for the first time then display welcome,thank you for visiting our websie else display the count of user for that perticular session
const session = require("express-session");
const express = require("express");
const app = express();
app.use(session({ secret: "LJU123" }));
app.get("/", (req, res) => {
    if (req.session.page) {
        req.session.page++;
        res.send(`You Have Visited Page ${req.session.page} times`);
    } else {
        req.session.page = 1;
        res.send("Welcome , Thank You For Visiting !!!");
    }
})
app.listen(1001);