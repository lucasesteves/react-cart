import { createAction } from 'typesafe-actions';

export const addToCart = createAction('shop/ADD_TO_CART')<ProductCart>();

export const removeItemCart = createAction('shop/REMOVE_ITEM_CART')<RemoveElementList>();

export const cleanCart = createAction('shop/CLEAN_CART')<undefined>();

export const updateTotalValue = createAction('shop/UPDATE_TOTAL_PRICE')<ElementList>();
