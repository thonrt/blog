var express = require('express');
var Log = require('../controller/log.js');
var List = require("../controller/list.js");

var router = express.Router();



router.route("/login").post(Log.login);


router.route("/item/:dataId")
  .get(List.getAllList)
  .delete(List.deleteList);

module.exports = router;
