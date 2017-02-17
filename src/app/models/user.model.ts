export class User{
  username: string;
  imgUrl: string;
  name: string;
  _id:string;
  constructor(username:string, name:string, _id=null, imgUrl:string){
    this.imgUrl = imgUrl;
    this.username = username;
    this.name = name;
    _id? this._id = _id : f => f;
  }
}
