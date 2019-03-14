import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import MenuItem from '../MenuItem';

describe('Menu Item', () => {
  let wrapper;
  const props = {
    item: { category: 'Food', id: 1, name: 'Chips + Chicken', price: 15000 },
    handleClick: jest.fn(),
  };

  it('Should render a menu item', () => {
    wrapper = shallow(<MenuItem {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
