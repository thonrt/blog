'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _desc, _value, _class;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _coreDecorators = require('core-decorators');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
        desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
        desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
        return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
        desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
        desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
        Object['define' + 'Property'](target, property, desc);
        desc = null;
    }

    return desc;
}

var Form = (_dec = (0, _coreDecorators.autobind)(), (_class = function (_React$Component) {
    _inherits(Form, _React$Component);

    function Form() {
        _classCallCheck(this, Form);

        return _possibleConstructorReturn(this, (Form.__proto__ || Object.getPrototypeOf(Form)).apply(this, arguments));
    }

    _createClass(Form, [{
        key: 'handleSubmit',
        value: function handleSubmit(e) {
            e.preventDefault();
            var username = this.refs.username.value;
            var password = this.refs.password.value;
            this.props.loginHandler(username, password);
        }
    }, {
        key: 'render',
        value: function render() {

            return _react2.default.createElement(
                'div',
                { className: 'row bella_login_form' },
                _react2.default.createElement(
                    'div',
                    { className: 'col-sm-6 b-r' },
                    _react2.default.createElement(
                        'h3',
                        { className: 'm-t-none m-b' },
                        '\u767B\u5F55'
                    ),
                    _react2.default.createElement(
                        'p',
                        null,
                        '\u6B22\u8FCE\u767B\u5F55\u672C\u7AD9(\u2299o\u2299)'
                    ),
                    _react2.default.createElement(
                        'form',
                        { role: 'form', onSubmit: this.handleSubmit },
                        _react2.default.createElement(
                            'div',
                            { className: 'form-group' },
                            _react2.default.createElement(
                                'label',
                                null,
                                '\u7528\u6237\u540D'
                            ),
                            _react2.default.createElement('input', { ref: 'username', type: 'email', placeholder: '\u8BF7\u8F93\u5165\u60A8\u6CE8\u518C\u7684E-mail', className: 'form-control' })
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'form-group' },
                            _react2.default.createElement(
                                'label',
                                null,
                                '\u5BC6\u7801'
                            ),
                            _react2.default.createElement('input', { ref: 'password', type: 'password', placeholder: '\u8BF7\u8F93\u5165\u5BC6\u7801', className: 'form-control' })
                        ),
                        _react2.default.createElement(
                            'div',
                            null,
                            _react2.default.createElement(
                                'button',
                                { className: 'btn btn-sm btn-primary pull-right m-t-n-xs', type: 'submit' },
                                _react2.default.createElement(
                                    'strong',
                                    null,
                                    '\u767B \u5F55'
                                )
                            ),
                            _react2.default.createElement(
                                'label',
                                null,
                                _react2.default.createElement(
                                    'div',
                                    { className: 'icheckbox_square-green auto_login' },
                                    _react2.default.createElement('input', { type: 'checkbox', className: 'i-checks auto_login_input' }),
                                    _react2.default.createElement('ins', { className: 'iCheck-helper auto_login_ins' })
                                ),
                                '\u81EA\u52A8\u767B\u5F55'
                            )
                        )
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'col-sm-6' },
                    _react2.default.createElement(
                        'h4',
                        null,
                        '\u8FD8\u4E0D\u662F\u4F1A\u5458\uFF1F'
                    ),
                    _react2.default.createElement(
                        'p',
                        null,
                        '\u60A8\u53EF\u4EE5\u6CE8\u518C\u4E00\u4E2A\u65B0\u8D26\u6237'
                    ),
                    _react2.default.createElement(
                        'p',
                        { className: 'text-center' },
                        _react2.default.createElement(
                            'a',
                            { href: 'form_basic.html' },
                            _react2.default.createElement('i', { className: 'fa-sign-in' })
                        )
                    )
                )
            );
        }
    }]);

    return Form;
}(_react2.default.Component), (_applyDecoratedDescriptor(_class.prototype, 'handleSubmit', [_dec], Object.getOwnPropertyDescriptor(_class.prototype, 'handleSubmit'), _class.prototype)), _class));


Form.propTypes = {
    dispatch: _react2.default.PropTypes.func.isRequired,
    loading: _react2.default.PropTypes.bool.isRequired
};
exports.default = Form;