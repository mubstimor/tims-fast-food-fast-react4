import axios from 'axios';

export const ORDER_BEGIN = 'ORDER_BEGIN';
export const FETCH_ORDER_SUCCESS = 'FETCH_ORDER_SUCCESS';
export const FETCH_ORDER_FAILURE = 'FETCH_ORDER_FAILURE';

const AUTH_TOKEN = localStorage.getItem('auth_token');

export const fetchOrderBegin = () => ({
  type: ORDER_BEGIN,
});

export const fetchOrderSuccess = order => ({
  type: FETCH_ORDER_SUCCESS,
  payload: { order },
});

export const fetchOrderFailure = error => ({
  type: FETCH_ORDER_FAILURE,
  payload: { error },
});

export function fetchOrders() {
  const url = `${process.env.HOST}/users/orders`;
  console.log('loading data ', url);
  return dispatch => {
    dispatch(fetchOrderBegin());
    return axios({
      url,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${AUTH_TOKEN}`,
      },
      mode: 'no-cors',
      cache: 'no-cache',
    })
      .then(response => {
        dispatch(fetchOrderSuccess(response.data.myorders));
      })
      .catch(error => {
        dispatch(fetchOrderFailure(error.response.data));
      });
  };
}
