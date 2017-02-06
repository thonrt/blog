import React from 'react';
import {connect} from 'react-redux';
import {loginStartAction} from '../../actions/login.action.js';
import FormComponent from './form';
import {autobind} from 'core-decorators';


@connect(state => ({
  login: state.login
}))
 class Login extends React.Component {

  @autobind()
  loginHandler(username,password){
    this.props.dispatch(loginStartAction(username,password));
  }

  render(){
    return (
          <FormComponent loginHandler={this.loginHandler}
             dispatch = {this.props.dispatch} />
    )
  }

}

Login.propTypes={
  dispatch: React.PropTypes.func.isRequired,
  isLogin: React.PropTypes.bool.isRequired
}
export default connect()(Login)
