import { createReducer } from 'typesafe-actions';
import {
  addToCart, removeItemCart, cleanCart, updateTotalValue,
} from './actions';

const INITIAL_STATE: ShopState = {
  cart: [],
  total: 0,
};

const session = createReducer(INITIAL_STATE)
  .handleAction(addToCart, (state, action) => ({
    ...state,
    cart: state.cart.concat(action.payload),
  }))
  .handleAction(removeItemCart, (state, action) => ({
    ...state,
    cart: state.cart.filter((item) => item.id !== action.payload.id),
    total: state.cart.length === 0 ? 0 : state.total,
  }))
  .handleAction(cleanCart, (state) => ({
    ...state,
    cart: [],
    total: 0,
  }))
  .handleAction(updateTotalValue, (state, action) => ({
    ...state,
    total: action.payload.type === 'add' ? state.total + action.payload.price : state.total - action.payload.price,
    cart: state.cart.map((item) => (item.id === action.payload.id ? { ...item, counter: action.payload.counter } : item)),
  }));

export default session;
