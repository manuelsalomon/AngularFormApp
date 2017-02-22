import { User } from './user.model';
import { Comment } from './comment.model';

export class Post{
  postId: string;
  author: string;
  title: string;
  body: string;
  comments: string;
  date: Date;
  isOwner: boolean;
  constructor(obj){
    this.postId = obj._id;
    this.author = obj.author;
    this.title = obj.title;
    this.body = obj.body;
    this.comments = obj.comments;
    this.date = obj.date;
    this.isOwner = obj.isOwner;
  }
}
