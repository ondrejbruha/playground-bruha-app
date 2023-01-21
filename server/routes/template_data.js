const express = require('express');
const router = express.Router();
const data = require("../template_data/template_data")

router.get('/random', function(req, res, next) {
    let d = data();
    res.json(d);
});

module.exports = router;
