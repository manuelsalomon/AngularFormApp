import { Action, Reducer }  from 'redux';
import * as AppActions from './actions';
import { Comment } from '../models/comment.model';

export interface CommentState{
  comments: Comment[];
}
