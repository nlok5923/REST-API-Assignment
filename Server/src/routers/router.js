const express = require("express");
const Customer = require("../models/customer");
const router = new express.Router();

router.get("/customers", async (req, res) => {
    try {
        const customers = await Customer.find({});
        console.log(customers);
        res.send(customers);
    } catch (e) {
        res.status(500).send();
    }
});

module.exports = router;