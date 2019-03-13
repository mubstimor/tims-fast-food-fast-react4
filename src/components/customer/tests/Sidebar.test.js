import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import Sidebar from '../Sidebar';

describe('Sidebar', () => {
  let wrapper;

  it('Should render a sidebar', () => {
    wrapper = shallow(<Sidebar />);
    expect(wrapper).toMatchSnapshot();
  });
});
