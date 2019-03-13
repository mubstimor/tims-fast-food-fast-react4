import React from 'react';

const OrderItem = ({ item }) => (
  <tr className="odd">
    <td>{item.item}</td>
    <td>{item.order_date}</td>
    <td>{item.status}</td>
    <td>
      <a href="order_details.html">
        <button
          type="button"
          className="button button_round_corner button_green"
        >
          {' '}
          View{' '}
        </button>
      </a>
      <a href="edit_order.html">
        <button
          type="button"
          className="button button_round_corner button_blue"
        >
          {' '}
          Edit{' '}
        </button>
      </a>
      <a href="order_details.html">
        <button type="button" className="button button_round_corner button_red">
          {' '}
          Cancel{' '}
        </button>
      </a>
    </td>
  </tr>
);

export default OrderItem;
