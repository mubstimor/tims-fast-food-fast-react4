import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import Login from '../Login';

describe('Login', () => {
  let wrapper;
  const props = {};

  it('Should render Login view', () => {
    wrapper = shallow(<Login {...props} />);
    expect(wrapper.find('h4').props().children).toBe('Sign in to your account');
  });
});
