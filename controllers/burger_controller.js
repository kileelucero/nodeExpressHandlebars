const express = require('express');
const burger = require('../models/burger')
const router = express.Router();

router.get("/", function (req, res) {
    burger.selectAll(function (data) {
        res.render("index", {
            burgers: data
        });
    });
});

router.post("/api/burgers", function (req, res) {
    burger.insertOne(req.body, function (data) {
        res.redirect("/");
    });
});

router.put("/burgers/:id", function (req, res) {
    burger.updateOne({
        devoured: 1
    }, req.params.id, function (data) {
        res.sendStatus(200);
    });
});

module.exports = router;