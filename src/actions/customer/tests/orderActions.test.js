import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import * as orderActions from '../orderActions';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

const order = [
  {
    id: 1,
    item: 'Chips + Chicken',
    order_date: 'Thursday, March 14, 2019 at 09:03',
    quantity: 1,
    status: 'new',
  },
];

describe('Order Actions', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it('should create an action fetch order success', () => {
    const expectedAction = {
      type: orderActions.FETCH_ORDER_SUCCESS,
      payload: { order },
    };
    expect(orderActions.fetchOrderSuccess(order)).toEqual(expectedAction);
  });

  it('should create an action fetch order error', () => {
    const error = {};
    const expectedAction = {
      type: orderActions.FETCH_ORDER_FAILURE,
      payload: { error },
    };
    expect(orderActions.fetchOrderFailure(error)).toEqual(expectedAction);
  });
});

describe('Test Fetch Order', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });
  it('tests orders can be fetched', () => {
    moxios.wait(() => {
      const req = moxios.requests.mostRecent();
      req.respondWith({
        status: 200,
        response: { order },
      });
    });

    const expectedAction = [
      {
        type: orderActions.FETCH_ORDER_SUCCESS,
        payload: { order },
      },
    ];

    const store = mockStore({});
    store.dispatch(orderActions.fetchOrders()).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  });
});
