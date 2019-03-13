import {
  ORDER_BEGIN,
  FETCH_ORDER_SUCCESS,
  FETCH_ORDER_FAILURE,
} from '../../actions/customer/orderActions';

const initialState = {
  orders: [],
  loading: false,
  error: null,
};

export default function customerReducer(state = initialState, action) {
  switch (action.type) {
    case ORDER_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case FETCH_ORDER_SUCCESS:
      return {
        ...state,
        loading: false,
        orders: action.payload.order,
      };

    case FETCH_ORDER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        orders: [],
      };

    default:
      return state;
  }
}
