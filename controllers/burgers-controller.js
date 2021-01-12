let express = require("express");
let router = express.router();
let burger = require("../modals/burger.js");

router.get("/", function (req, res) {
    res.redirect("/burgers");
});

router.get("/burgers", function (req, res) {
    burger.all(function (burgerData) {
        res.render("index", {
            burger_data: burgerData
        });
    });
});

module.exports = router;
