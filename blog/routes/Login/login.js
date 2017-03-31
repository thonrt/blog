import React from 'react';
import { connect } from 'react-redux';
import { loginStartAction } from '../../actions/login.action.js';
import FormComponent from './form';


class Login extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.loginHandler = this.loginHandler.bind(this)
  }

    loginHandler(username, password) {
        this.props.dispatch(loginStartAction(username, password));
    }

    render() {
        return ( <
            FormComponent loginHandler = { this.loginHandler }
            dispatch = { this.props.dispatch }
            login = { this.props.login }
            />
        )
    }

}

Login.propTypes = {
    dispatch: React.PropTypes.func.isRequired
}
export default connect()(Login)
