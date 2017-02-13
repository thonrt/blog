var express = require('express');
var Log = require('../controller/log.js');

var router = express.Router();

router.get("/", function(req, res) {
    res.send("hello world");
});

router.post("/login", Log.login);

module.exports = router;