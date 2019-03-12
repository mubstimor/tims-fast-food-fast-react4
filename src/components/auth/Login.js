import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { login } from '../../actions/auth/loginActions';
import '../../assets/css/Login.css';
import LoginForm from './LoginForm';
import { changelistener } from '../../utils/globals';

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loginReducer.isAuthenticated === true) {
      const role = nextProps.loginReducer.user.data.role;
      if (role === 'Customer') {
        window.location.assign('/user/customer');
      }
    }
  }

  onSubmit = event => {
    event.preventDefault();
    const { email, password } = this.state;
    this.props.login(email, password);
  };

  render() {
    const { email, password } = this.state;
    const { isLoginPending, loginError } = this.props;
    return (
      <Container>
        <LoginForm
          onSubmit={this.onSubmit}
          email={email}
          password={password}
          changed={changelistener(this)}
          isLoginPending={isLoginPending}
          loginError={loginError}
        />
      </Container>
    );
  }
}

export const Container = ({ children }) => (
  <div className="container">
    <div className="row Login">
      <div className="col-md-8 m-auto">
        <h4 className="text-center signIn">Fast Food Fast Login</h4>
        {children}
      </div>
    </div>
  </div>
);

Container.propTypes = {
  children: PropTypes.instanceOf(Object).isRequired,
};

Login.propTypes = {
  isLoginPending: PropTypes.bool.isRequired,
  loginError: PropTypes.string,
  login: PropTypes.func.isRequired,
};

Login.defaultProps = {
  loginError: '',
};

const mapStateToProps = state => ({
  isLoginPending: state.loginReducer.isLoginPending,
  loginSuccess: state.loginReducer.loginSuccess,
  loginError: state.loginReducer.loginError,
  isAuthenticated: state.loginReducer.isAuthenticated,
  loginReducer: state.loginReducer,
});

const mapDispatchToProps = dispatch => ({
  login: (email, password) => dispatch(login(email, password)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
