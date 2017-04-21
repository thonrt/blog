var express = require('express');
var Log = require('../controller/log.js');
var List = require("../controller/list.js");

var router = express.Router();

var middleWare =  function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:8090");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
};
router.use(middleWare);

router.route("/login").post(Log.login);
router.route("/item")
  .put(List.addList);


router.route("/item/:dataId")
  .get(List.getAllList)
  .delete(List.deleteList)
  .post(List.updateList)
  .put(List.addList);

module.exports = router;
