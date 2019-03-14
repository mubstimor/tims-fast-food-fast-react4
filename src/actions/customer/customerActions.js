import axios from 'axios';

export const MENU_BEGIN = 'MENU_BEGIN';
export const FETCH_MENU_SUCCESS = 'FETCH_MENU_SUCCESS';
export const FETCH_MENU_FAILURE = 'FETCH_MENU_FAILURE';

const AUTH_TOKEN = localStorage.getItem('auth_token');

export const fetchMenuBegin = () => ({
  type: MENU_BEGIN,
});

export const fetchMenuSuccess = menu => ({
  type: FETCH_MENU_SUCCESS,
  payload: { menu },
});

export const fetchMenuFailure = error => ({
  type: FETCH_MENU_FAILURE,
  payload: { error },
});

export function fetchMenu() {
  const url = `${process.env.HOST}/menu`;
  return dispatch => {
    dispatch(fetchMenuBegin());
    return axios
      .get(url)
      .then(response => {
        dispatch(fetchMenuSuccess(response.data.menu));
      })
      .catch(error => {
        dispatch(fetchMenuFailure(error.response.data));
      });
  };
}
