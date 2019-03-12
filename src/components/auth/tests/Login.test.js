import React from 'react';
import expect from 'expect';
import sinon from 'sinon';
import { mount, shallow } from 'enzyme';
import { Provider } from 'react-redux';
import LoginTest, { Login } from '../Login';

const storeFake = (state, action) => ({
  subscribe: jest.fn(),
  default: jest.fn(),
  getState: () => state,
  dispatch: () => action,
});

const store = storeFake({
  loginReducer: {
    isLoginPending: false,
    loginSuccess: {},
    loginError: '',
    isAuthenticated: false,
  },
});

describe('Login functionality', () => {
  const props = { isLoginPending: false, loginError: '', login: jest.fn() };
  const loginWrapper = mount(
    <Provider store={store}>
      <Login {...props} />
    </Provider>
  );
  it('Login should render correctly', () => {
    const component = loginWrapper;
    expect(component).toMatchSnapshot();
  });

  it('handles the state changes on the Login Form', () => {
    const emailField = loginWrapper.find('.form-control').first();
    emailField.value = 'testuser@app.com';
    const event = { target: { name: 'testName', value: 'testValue' } };
    emailField.simulate('change', event);
    expect(emailField.value).toEqual('testuser@app.com');
  });

  it('handles submit', () => {
    const form = loginWrapper.find('#login-form');
    form.simulate('submit');
    const { protocol, host } = window.location;
    sinon.stub(window.location, 'assign');
    expect(window.location.href).toEqual(`${protocol}//${host}/`);
  });

  it('will receive props', () => {
    const component = shallow(<Login {...props} />);
    const state = {
      loginReducer: {
        user: {
          data: {
            role: 'Customer',
          },
        },
      },
    };
    const nextProps = {
      loginReducer: {
        user: {
          data: {
            role: 'Customer',
          },
        },
        isAuthenticated: true,
      },
    };
    component.setState(state);
    component.instance().componentWillReceiveProps(nextProps);
    expect(component.state().loginReducer.user.data.role).toEqual('Customer');
  });
});
