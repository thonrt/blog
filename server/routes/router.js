var express = require('express');
var Log = require('../controller/log.js');
var List = require("../controller/list.js");

var router = express.Router();



router.route("/login").post(Log.login);

router.route("/get_all_list").get(List.getAllList);

module.exports = router;
