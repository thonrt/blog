import React from 'react';

class Form extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault();
    const username = this.refs.username.value;
    const password = this.refs.password.value;
    this.props.loginHandler(username, password);
  }

  render() {
    return (
      <div className="row bella_login_form">
          <div className="col-sm-6 b-r">
              <h3 className="m-t-none m-b">登录</h3>
              <p>欢迎登录本站(⊙o⊙)</p>
              <form role="form" onSubmit={this.handleSubmit}>
                  <div className="form-group">
                      <label>用户名</label>
                      <input ref="username" type="email" placeholder="请输入您注册的E-mail" className="form-control" />
                  </div>
                  <div className="form-group">
                      <label>密码</label>
                      <input ref="password" type="password" placeholder="请输入密码" className="form-control" />
                  </div>
                  <div>
                      <button className="btn btn-sm btn-primary pull-right m-t-n-xs" type="submit">
                        <strong>登 录</strong>
                      </button>
                      <label>
                          <div className="icheckbox_square-green auto_login">
                              <input type="checkbox" className="i-checks auto_login_input" />
                              <ins className="iCheck-helper auto_login_ins"></ins>
                          </div>自动登录
                      </label>
                  </div>
              </form>
          </div>
      </div>
    );
  }
}

Form.propTypes={
  dispatch: React.PropTypes.func.isRequired
}
export default Form
