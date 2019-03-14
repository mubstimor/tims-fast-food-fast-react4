import orderReducer from '../orderReducer';
import * as orderActions from '../../../actions/customer/orderActions';

describe('order reducer', () => {
  const initialState = {
    orders: [],
    loading: false,
    error: null,
  };

  const order = [
    {
      id: 1,
      item: 'Chips + Chicken',
      order_date: 'Thursday, March 14, 2019 at 09:03',
      quantity: 1,
      status: 'new',
    },
  ];

  it('should return the initial state', () => {
    expect(orderReducer(undefined, {})).toEqual(initialState);
  });

  it('should handle ORDER_BEGIN', () => {
    const action = {
      type: orderActions.ORDER_BEGIN,
    };
    expect(orderReducer({}, action)).toEqual({
      loading: true,
      error: null,
    });
  });

  it('should handle FETCH_ORDER_SUCCESS', () => {
    const action = {
      type: orderActions.FETCH_ORDER_SUCCESS,
      payload: { order },
    };
    const expectedState = {
      orders: order,
      loading: false,
    };

    expect(orderReducer({}, action)).toEqual(expectedState);
  });

  it('should handle FETCH_ORDER_FAILURE', () => {
    const error = {};

    const action = {
      type: orderActions.FETCH_ORDER_FAILURE,
      payload: { error },
    };

    expect(orderReducer({}, action)).toEqual({
      loading: false,
      error,
      orders: [],
    });
  });
});
