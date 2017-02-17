import { User } from './user.model';

export class Comment{
  body: string;
  author: User;
  _id: string;
  isOwner: boolean;
  date: Date;
  constructor(body:string, author: User, _id: string, isOwner){
    this.body = body;
    this.author = author;
    this._id = _id;
    this.isOwner = isOwner;
  }
}
