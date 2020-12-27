import { combineReducers } from 'redux';
import { ActionType } from 'typesafe-actions';
import shop from './shop/reducer';

type ActionsUnion = | typeof import('./shop/actions');
declare type RootAction = ActionType<ActionsUnion>;
declare module 'typesafe-actions' {
  interface Types {
    RootAction: RootAction;
  }
}

export default combineReducers({
  shop
});
