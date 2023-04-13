const express = require("express");
const router = express.Router();

router.get("/",(req,res) => {
    res.render('index');
});

router.get("/home",(req,res) => {
    res.render("home");
});

router.get("/book",(req,res) => {
    res.render("book_now");
});

router.get("/login",(req,res) => {
    res.render("login");
});

router.get("/register",(req,res) => {
    res.render("register");
});

router.get("/cp",(req,res) => {
    res.render("change_pass.hbs");
});

router.get("/pre_wedding",(req,res) => {
    res.render("pre_wedding.hbs");
});

router.get("/wedding",(req,res) => {
    res.render("wedding.hbs");
});

router.get("/portrait",(req,res) => {
    res.render("portrait.hbs");
});

router.get("/events",(req,res) => {
    res.render("events.hbs");
});

router.get("/products",(req,res) => {
    res.render("product.hbs");
});

router.get("/travel",(req,res) => {
    res.render("travel.hbs");
});
router.get("/profile",(req,res) => {
    res.render("profile.hbs");
});
router.get("/msg",(req,res) => {
    res.render("msg.hbs");
});

// router.get("/admin",(req,res) => {
//     res.render("admin.hbs",{length:""});
// });



module.exports=router;
