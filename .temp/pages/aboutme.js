"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AboutMe = function (_React$Component) {
    _inherits(AboutMe, _React$Component);

    function AboutMe() {
        _classCallCheck(this, AboutMe);

        return _possibleConstructorReturn(this, (AboutMe.__proto__ || Object.getPrototypeOf(AboutMe)).apply(this, arguments));
    }

    _createClass(AboutMe, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "div",
                { className: "col-sm-8" },
                _react2.default.createElement(
                    "div",
                    { className: "ibox float-e-margins" },
                    _react2.default.createElement(
                        "div",
                        { className: "ibox-title" },
                        _react2.default.createElement(
                            "h5",
                            null,
                            "\u4E2A\u4EBA\u8D44\u6599"
                        )
                    ),
                    _react2.default.createElement(
                        "div",
                        null,
                        _react2.default.createElement(
                            "div",
                            { className: "ibox-content no-padding border-left-right" },
                            _react2.default.createElement("img", { alt: "image", className: "img-responsive", src: "images/user.jpg" })
                        ),
                        _react2.default.createElement(
                            "div",
                            { className: "ibox-content profile-content" },
                            _react2.default.createElement(
                                "h4",
                                null,
                                _react2.default.createElement(
                                    "strong",
                                    null,
                                    "Bella-Duan"
                                )
                            ),
                            _react2.default.createElement(
                                "p",
                                null,
                                _react2.default.createElement("i", { className: "fa fa-map-marker" }),
                                " \u6DF1\u5733\u5E02\u798F\u7530\u4E1C\u6D77\u56FD\u9645\u4E2D\u5FC3A\u5EA77L"
                            ),
                            _react2.default.createElement(
                                "h5",
                                null,
                                "\u5173\u4E8E\u6211"
                            ),
                            _react2.default.createElement(
                                "ul",
                                null,
                                _react2.default.createElement(
                                    "li",
                                    null,
                                    "\u4F1A\u70B9\u524D\u7AEF\u6280\u672F\uFF0Cdiv+css\u554A\uFF0CjQuery\u4E4B\u7C7B\u7684\uFF0C\u4E0D\u662F\u5F88\u7CBE\uFF1B"
                                ),
                                _react2.default.createElement(
                                    "li",
                                    null,
                                    "\u70ED\u7231\u751F\u6D3B\uFF0C\u70ED\u7231\u4E92\u8054\u7F51\uFF0C\u70ED\u7231\u65B0\u6280\u672F\uFF1B\u6709\u4E00\u4E2A\u5C0F\u7684\u56E2\u961F\uFF0C\u5728\u4E0D\u65AD\u7684\u5BFB\u6C42\u65B0\u7684\u7A81\u7834"
                                )
                            ),
                            _react2.default.createElement(
                                "div",
                                { className: "user-button" },
                                _react2.default.createElement(
                                    "div",
                                    { className: "row" },
                                    _react2.default.createElement(
                                        "div",
                                        { className: "col-sm-6" },
                                        _react2.default.createElement(
                                            "button",
                                            { type: "button", className: "btn btn-primary btn-sm btn-block" },
                                            _react2.default.createElement("i", { className: "fa fa-envelope" }),
                                            " \u53D1\u9001\u6D88\u606F"
                                        )
                                    ),
                                    _react2.default.createElement(
                                        "div",
                                        { className: "col-sm-6" },
                                        _react2.default.createElement(
                                            "button",
                                            { type: "button", className: "btn btn-default btn-sm btn-block" },
                                            _react2.default.createElement("i", { className: "fa fa-coffee" }),
                                            " \u8D5E\u52A9"
                                        )
                                    )
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return AboutMe;
}(_react2.default.Component);

exports.default = AboutMe;