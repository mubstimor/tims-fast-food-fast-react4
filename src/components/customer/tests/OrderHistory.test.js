import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import { OrderHistory } from '../OrderHistory';

describe('Order History', () => {
  const props = {
    orders: [
      {
        id: 1,
        item: 'Chips + Chicken',
        order_date: 'Thursday, March 14, 2019 at 09:03',
        quantity: 1,
        status: 'new',
      },
    ],
    loading: true,
    error: true,
    fetchOrders: jest.fn(),
  };
  const wrapper = shallow(<OrderHistory {...props} />);

  it('Should render an order history view', () => {
    const div = wrapper.find('#wrapper');
    expect(div.length).toBe(1);
  });
});
