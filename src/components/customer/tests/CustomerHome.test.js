import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import CustomerHome from '../CustomerHome';

describe('Customer Home functionality', () => {
  const customerWrapper = shallow(<CustomerHome />);
  it('should render correctly', () => {
    const component = customerWrapper;
    expect(component).toMatchSnapshot();
  });
});
