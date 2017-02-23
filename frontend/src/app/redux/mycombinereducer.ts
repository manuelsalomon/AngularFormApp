import { combineReducers, Store, createStore, StoreEnhancer } from 'redux';
import { UserState, UserReducer } from './user.reducer';	
import { PostState, PostReducer } from './post.reducer';
// export function myCombineReducers(reducer1, reducer2){
  // return combineReducers<AppState>({reducer1, reducer2});
// }


interface AppState {
  user: UserState,
  posts: PostState,
  // comments: CommentState
}
const devTools: StoreEnhancer<AppState> = window["devToolsExtension"]?
window["devToolsExtension"]() : f => f;

export default createStore<AppState>(combineReducers<AppState>({ UserReducer, PostReducer }), devTools);
