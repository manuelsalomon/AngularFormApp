import { Store, combineReducers, createStore, StoreEnhancer, Reducer } from 'redux';
import { OpaqueToken } from '@angular/core';


import { UserState, UserReducer } from './user.reducer';
import { PostState, PostReducer } from './post.reducer';
// import { CommentState, CommentReducer } from './comment.reducer';

export interface AppState {
  user: UserState,
  posts: PostState,
  // comments: CommentState
}

let AppReducer : Reducer<AppState> = combineReducers<AppState>({UserReducer, PostReducer});

const devTools: StoreEnhancer<AppState> = window["devToolsExtension"]?
window["devToolsExtension"]() : f => f;

export let store: Store<AppState> = createStore<AppState>(AppReducer, devTools);


export const AppStore = new OpaqueToken('app.store');
