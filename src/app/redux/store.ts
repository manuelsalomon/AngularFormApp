import { Store, combineReducers, createStore, StoreEnhancer } from 'redux';
import { OpaqueToken } from '@angular/core';

import { UserState } from './user.reducer';
import { PostState } from './post.reducer';
import { CommentState } from './comment.reducer';

export interface AppState {
  user: UserState,
  posts: PostState,
  comments: CommentState
}

export const AppStore = new OpaqueToken('app.store');

const devTools: StoreEnhancer<AppState> = window["devToolsExtension"]?
window["devToolsExtension"]() : f => f;
