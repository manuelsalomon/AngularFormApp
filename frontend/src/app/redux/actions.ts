 import { Action, ActionCreator } from 'redux';
 import { Post } from '../models/post.model'

// posts actions
 export const POSTS_GET: string = 'POSTS_GET';
 export const POST_GET: string = 'POST_GET';
 export const POST_NEW: string = 'POST_NEW';
 export const POST_EDIT: string = 'POST_EDIT';
 export const POST_DELETE: string = "POST_DELETE";

 // users actions:
 export const USER_VALIDATE: string = 'USER_VALIDATE';
 export const USER_ERROR: string = 'USER_ERROR';
 export const USER_REGISTER: string = 'USER_REGISTER';
 export const USER_LOGIN: string = 'USER_LOGIN';
 export const USER_LOGOUT: string = 'USER_LOGOUT';

 // comments actions:
 export const COMMENT_NEW: string = 'COMMENT_NEW';
 export const COMMENT_EDIT: string = 'COMMENT_EDIT';
 export const COMMENT_DELETE: string = 'COMMENT_DELETE';

 // interfaces:

 // action creators:
export const userValidate: ActionCreator<Action> = (status) => {
  return{
    type: USER_VALIDATE,
    status: status
  }
}


 // posts:
 export const getPosts: ActionCreator<Action> = (posts: Post[]) =>{
   return{
     type: POSTS_GET,
     posts: posts
   }
 }
 export const getPost: ActionCreator<Action> = (postId) => {
   return{
     type: POST_GET,
     postId: postId
   }
 }
 export const editPost: ActionCreator<Action> = (postId) => {
   return{
     type: POST_EDIT,
     postId: postId
   }
 }
 export const deletePost: ActionCreator<Action> = (postId) => {
   return{
     type: POST_DELETE,
     postId: postId
   }
 }
 export const newPost: ActionCreator<Action> = (title, body, author) => {
   return{
     type: POST_NEW,
     title: title,
     body: body,
     author: author
   }
 }
 export const registerUser: ActionCreator<Action> = (obj:any)=>{
   return{
     type: USER_REGISTER,
     username: obj.username,
     name: obj.name,
     _id: obj._id
   }
 }
export const userLogin: ActionCreator<Action> = (obj:any)=> {
  return{
    type: USER_LOGIN,
    username: obj.username,
    name: obj.name,
    _id: obj._id
  }
}
export const logout: ActionCreator<Action> = () => {
  return{
    type: USER_LOGOUT
  }
}
export const userError: ActionCreator<Action> = (error:string) => {
  return{
    type: USER_ERROR,
    error: true,
    errorMessage: error
  }
}
// comments actions:
export const newComment: ActionCreator<Action> = (body:string) => {
  return{
    type: COMMENT_NEW,
    body: body,
  }
}
export const editComment: ActionCreator<Action> = (_id: string) => {
  return{
    type: COMMENT_EDIT,
    _id: _id
  }
}
export const deleteComment: ActionCreator<Action> = (_id: string, newBody: string) => {
  return{
    type: COMMENT_DELETE,
    _id: _id,
    newBody: newBody
  }
}
