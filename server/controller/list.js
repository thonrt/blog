var uuid = require("node-uuid");
function getAllList(req, res, next) {
  var list = req.session.list;
	if (!list) {
    list = [{
      id:0,
      title:"webpack 热更新",
      website:"http://www.cnblogs.com/thonrt/p/6595033.html",
      keyWords:"webpack",
      author:"快饿死的鱼",
      date:"2017/3/31"
    },{
      id:1,
      title:"webpack 热更新",
      website:"http://www.cnblogs.com/thonrt/p/6595033.html",
      keyWords:"webpack",
      author:"快饿死的鱼",
      date:"2017/3/31"
    },{
      id:2,
      title:"webpack 热更新",
      website:"http://www.cnblogs.com/thonrt/p/6595033.html",
      keyWords:"webpack",
      author:"快饿死的鱼",
      date:"2017/3/31"
    },{
      id:3,
      title:"webpack 热更新",
      website:"http://www.cnblogs.com/thonrt/p/6595033.html",
      keyWords:"webpack",
      author:"快饿死的鱼",
      date:"2017/3/31"
    }];
    req.session.list = list;
	}
	res.json({
		"hint": "ok",
		"data": list
	});
};


function updateList(req,res,next){
  var list = req.session.list;
	var dataId = req.params.dataId;
	var postData = req.body;


		list.forEach(function(item) {
      var itemId = item.id+"";
			if (itemId === dataId) {
				item.title = postData.title;
				item.webSite = postData.webSite;
				item.keyWords = postData.keyWords;
			}
		});
		req.session.list = list;
		res.json({
			"hint": "ok"
		});

};

function addList(req,res,next){
    var list = req.session.list;
    var postData = req.body;
    console.log(postData);
    var data = {
      id: uuid.v1(),
      title : postData.title,
      webSite : postData.webSite,
      keyWords : postData.keyWords
    };
    list.push(data);
    req.session.list = list;
    res.json({
      "hint": "ok"
    });
};

var deleteList = function(req, res, next) {
	var clientList = req.session.list;
	var clientId = req.params.dataId;
	var newClientData = [];

	if (clientList && clientId) {
		clientList.forEach(function(item) {
      var itemId = item.id +"";
			if (itemId !== clientId) {
				newClientData.push(item);
			}
		});
		req.session.list = newClientData;
	}

	res.json({
		"hint": "OK"
	});
};
module.exports = {
    addList:addList,
    updateList:updateList,
    getAllList: getAllList,
    deleteList:deleteList
};
