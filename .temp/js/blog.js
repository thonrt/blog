"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SubMessage = _react2.default.createClass({
  displayName: 'SubMessage',
  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
    console.log("子组件将要获得props");
  },
  shouldComponentUpdate: function shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.count > 4) {
      return false;
    }
    return true;
  },
  render: function render() {
    return _react2.default.createElement(
      'h3',
      null,
      this.props.count
    );
  }
});

var blog = function (_React$Component) {
  _inherits(blog, _React$Component);

  function blog(props) {
    _classCallCheck(this, blog);

    var _this = _possibleConstructorReturn(this, (blog.__proto__ || Object.getPrototypeOf(blog)).call(this, props));

    _this.state = { count: 0 };
    return _this;
  }

  _createClass(blog, [{
    key: 'shouldComponentUpdate',


    //更新周期

    value: function shouldComponentUpdate(nextProp, nextState) {
      //判断是否需要重新渲染
      console.log("shouldComponentUpdate");
      if (nextState.count > 8) {
        return false;
      }
      return true;
    }
  }, {
    key: 'componentWillUpdate',
    value: function componentWillUpdate(nextProps, nextState) {
      //做一些数据的处理
      console.log("componentWillUpdate");
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      //可以获取更新后的DOM结构
      console.log("update success");
    }
  }, {
    key: 'doUpdate',
    value: function doUpdate() {
      this.setState({ count: this.state.count + 1 });
    }
  }, {
    key: 'render',
    value: function render() {
      console.log("render");
      return _react2.default.createElement(
        'div',
        null,
        'hello world!  ',
        this.state.count,
        _react2.default.createElement(
          'button',
          { onClick: this.doUpdate.bind(this) },
          'update'
        ),
        _react2.default.createElement(SubMessage, { count: this.state.count })
      );
    }
  }]);

  return blog;
}(_react2.default.Component);

exports.default = blog;