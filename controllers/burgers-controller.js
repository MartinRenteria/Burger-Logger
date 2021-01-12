let express = require("express");
let router = express.router();
let burger = require("../modals/burger.js");

router.get("/", function (req, res) {
    res.redirect("/burgers");
});


module.exports = router;
