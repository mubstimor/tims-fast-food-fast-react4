import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import Navbar from '../Navbar';

describe('Login', () => {
  let wrapper;
  const props = {};

  it('Should render navbar', () => {
    wrapper = shallow(<Navbar {...props} />);
    expect(wrapper.find('button').props().children).toBe('Get started');
  });
});
