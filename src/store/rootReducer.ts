import { combineReducers } from 'redux';
import { ActionType } from 'typesafe-actions';
import shop from './shop/reducer';

type ActionsUnion = | typeof import('./shop/actions');
declare type RootAction = ActionType<ActionsUnion>;
declare module 'typesafe-actions' {
  // eslint-disable-next-line no-unused-vars
  interface Types {
    RootAction: RootAction;
  }
}

export default combineReducers({
  shop,
});
