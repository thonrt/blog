
function getAllList(req, res, next) {
  // var list = req.session.list;
  console.log(req.session);
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


var deleteList = function(req, res, next) {
	var clientList = req.session.list;
	var clientId = req.params.dataId;
	var newClientData = [];
	console.log(clientId,clientList);
	if (clientList && clientId) {
		clientList.forEach(function(item) {
			if (item.id !== clientId) {
				newClientData.push(item);
			}
		});
		clientList = newClientData;
	}


	res.json({
		"hint": "OK"
	});
};
module.exports = {
    getAllList: getAllList,
    deleteList:deleteList
};
