import { createStore } from 'redux';
import { AppState } from './store';

export function myCreateStore(reducer, devtools){
  return createStore<AppState>(reducer, devtools)
}
