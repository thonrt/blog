
function getAllList(req, res, next) {
  var list = req.session.list;
	if (!list) {
    list = [];
	}

  list = [{
    title:"webpack 热更新",
    website:"http://www.cnblogs.com/thonrt/p/6595033.html",
    keyWords:"webpack",
    author:"快饿死的鱼",
    date:"2017/3/31"
  },{
    title:"webpack 热更新",
    website:"http://www.cnblogs.com/thonrt/p/6595033.html",
    keyWords:"webpack",
    author:"快饿死的鱼",
    date:"2017/3/31"
  },{
    title:"webpack 热更新",
    website:"http://www.cnblogs.com/thonrt/p/6595033.html",
    keyWords:"webpack",
    author:"快饿死的鱼",
    date:"2017/3/31"
  },{
    title:"webpack 热更新",
    website:"http://www.cnblogs.com/thonrt/p/6595033.html",
    keyWords:"webpack",
    author:"快饿死的鱼",
    date:"2017/3/31"
  }];
  req.sessionlist = list;
	res.json({
		"hint": "ok",
		"data": list
	});
};


module.exports = {
    getAllList: getAllList
};
