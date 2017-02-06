var express = require('express');

var router = express.Router();

router.get("/", function(req, res) {
    res.send("hello world");
});

router.post("/login", function(req, res) {
  res.json({
  "hint": "ok"
});
});

module.exports = router;
