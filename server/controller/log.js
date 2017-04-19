"use strict";


var login = function(req, res, next) {
    var userSession = req.session.user;

    if (!userSession) {
        userSession = {};
    }
    var postData = req.body;

    if (postData.username === "79976764@qq.com" && postData.password === "123456") {
        userSession.username = postData.username;
        userSession.password = postData.password;
        req.session.user = userSession;
        res.json({
            "hint": "ok",
            "data": "登录成功"
        });
    } else {
        res.json({
            "hint": "fail",
            "error": "用户名或者密码错误"
        });
    }


};

module.exports = {
    login: login
};
