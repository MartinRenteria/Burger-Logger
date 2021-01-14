let express = require("express");
let router = express.Router();
let burger = require("../models/burger.js");

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


router.post("/burgers/create", function (req, res) {
    burger.create(req.body.burger_name, function (result) {
        console.log(result);
        res.redirect("/");
    });
});

router.put("/burgers/:id", function (req, res) {
    burger.update(req.params.id, function (result) {
        console.log(result);
        res.sendStatus(200);
    });
});

router.delete("/burgers/:id", (req, res) => {
    const id = req.params.id;
    console.log("id", id);

    burger.deleteOne(id, (result) => {
        if (result.affectedRows == 0) {
            return res.status(404).end();
        }
        else {
            res.status(200).end();
        }
    });
});


module.exports = router;
