import store from '../../../store';
import moxios from 'moxios';
import * as customerActions from '../customerActions';

const menu = [
  { category: 'Food', id: 1, name: 'Chips + Chicken', price: 15000 },
];

describe('Customer Actions', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it('should create an action fetch menu success', () => {
    const expectedAction = {
      type: customerActions.FETCH_MENU_SUCCESS,
      payload: { menu },
    };
    expect(customerActions.fetchMenuSuccess(menu)).toEqual(expectedAction);
  });

  it('should create an action fetch menu error', () => {
    const error = {};
    const expectedAction = {
      type: customerActions.FETCH_MENU_FAILURE,
      payload: { error },
    };
    expect(customerActions.fetchMenuFailure(error)).toEqual(expectedAction);
  });
});

describe('Test Fetch Menu', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });
  it('tests menu can be fetched', () => {
    moxios.wait(() => {
      const req = moxios.requests.mostRecent();
      req.respondWith({
        status: 200,
        response: { menu },
      });
    });
    return store.dispatch(customerActions.fetchMenu()).then(() => {
      expect(store.getState().customerReducer.menu).toEqual(menu);
    });
  });
});
