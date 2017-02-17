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

export const PostReducer: Reducer<PostState> = (state: PostState = postInitialState, action) => {
  switch (action.type){
    case AppActions.POSTS_GET:
     let newPosts = Object.assign({}, state);
     newPosts.posts = action.posts
     return newPosts
    default:
      return state;
     }
  }
