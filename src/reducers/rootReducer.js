import { combineReducers } from 'redux';
import loginReducer from './auth/loginReducer';
import customerReducer from './customer/customerReducer';
import orderReducer from './customer/orderReducer';

export default combineReducers({
  loginReducer,
  customerReducer,
  orderReducer,
});
