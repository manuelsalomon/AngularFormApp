import { combineReducers } from 'redux';
import { AppState } from './store';

export function myCombineReducers(reducer1, reducer2){
  return combineReducers<AppState>({reducer1, reducer2});
}
