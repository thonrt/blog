'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _sidebar = require('../Sidebar/sidebar.component');

var _sidebar2 = _interopRequireDefault(_sidebar);

var _header = require('../Header/header.component');

var _header2 = _interopRequireDefault(_header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Manage = _react2.default.createClass({
  displayName: 'Manage',
  render: function render() {
    return _react2.default.createElement(
      'div',
      { style: { height: '100%' } },
      _react2.default.createElement(_sidebar2.default, null),
      _react2.default.createElement(_header2.default, null),
      _react2.default.createElement(
        'div',
        { className: 'layout-contentbox clearfix' },
        this.props.children
      )
    );
  }
});

exports.default = Manage;