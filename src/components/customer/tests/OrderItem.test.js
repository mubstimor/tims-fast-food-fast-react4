import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import OrderItem from '../OrderItem';

describe('Order Item', () => {
  let wrapper;
  const props = {
    item: {
      id: 1,
      item: 'Chips + Chicken',
      order_date: 'Thursday, March 14, 2019 at 09:03',
      quantity: 1,
      status: 'new',
    },
  };

  it('Should render an order item', () => {
    wrapper = shallow(<OrderItem {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
