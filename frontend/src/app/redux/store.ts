import { Store, combineReducers, createStore, StoreEnhancer } from 'redux';
import { OpaqueToken } from '@angular/core';

// import { UserState, UserReducer } from './user.reducer';
import { PostState, PostReducer } from './post.reducer';
// import { CommentState, CommentReducer } from './comment.reducer';

export interface AppState {
  // user: UserState,
  posts: PostState,
  // comments: CommentState
}

const devTools: StoreEnhancer<PostState> = window["devToolsExtension"]?
window["devToolsExtension"]() : f => f;

export let store: Store<PostState> = createStore<PostState>(PostReducer, devTools);


export const AppStore = new OpaqueToken('app.store');
