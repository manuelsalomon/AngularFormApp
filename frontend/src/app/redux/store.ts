import myCombineReducers  from './mycombinereducer';
import { combineReducers, StoreEnhancer, Reducer, Store, createStore} from 'redux';
import { OpaqueToken } from '@angular/core';
import { UserState } from './user.reducer';	
import { PostState } from './post.reducer';

export interface AppState {
  user: UserState,
  posts: PostState,
  // comments: CommentState
}
export const store = myCombineReducers;

export const AppStore = new OpaqueToken('app.store');
