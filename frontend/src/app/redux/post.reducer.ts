import { Action, Reducer }  from 'redux';
import * as AppActions from './actions';
import { Post } from '../models/post.model';
import { BackendService } from '../backend.service';

export interface PostState{
  posts: Post[];
  currentPost: {
    post: Post,
    commentsAmmount: number
  }
}
const postInitialState = {
  posts: [],
  currentPost: {
    post: null,
    commentsAmmount: 0
  }
}

// export const postsReducer: Reducer<PostState> = (state: PostState = postInitialState, action: Action) => {
//   switch (action.type){
//     case AppActions.POSTS_GET:
//      let newPosts = Object.assign({}, state);
//      let posts = BackendService.getPosts()
//      .subscribe((res) => {
//        console.log(res);
//      })
//      return posts;
//
//   }
// }
