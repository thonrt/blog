"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var $http = {
    requestData: function requestData(option, successCallback, errorCallBack) {
        var server = "http://localhost:8000";
        return $.ajax({
            url: server + option.url,
            dataType: 'json',
            type: option.method || "GET",
            cache: false,
            data: option.data || null
        });
    }
};

exports.default = $http;