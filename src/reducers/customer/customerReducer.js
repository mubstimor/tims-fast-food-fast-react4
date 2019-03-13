import {
  MENU_BEGIN,
  FETCH_MENU_SUCCESS,
  FETCH_MENU_FAILURE,
} from '../../actions/customer/customerActions';

const initialState = {
  menu: [],
  loading: false,
  error: null,
};

export default function customerReducer(state = initialState, action) {
  switch (action.type) {
    case MENU_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case FETCH_MENU_SUCCESS:
      return {
        ...state,
        loading: false,
        menu: action.payload.menu,
      };

    case FETCH_MENU_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        menu: [],
      };

    default:
      return state;
  }
}
