import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import TopNav from '../TopNav';

describe('TopNav', () => {
  let wrapper;

  it('Should render a top nav bar', () => {
    wrapper = shallow(<TopNav />);
    expect(wrapper).toMatchSnapshot();
  });
});
