import { Injectable, Inject } from '@angular/core';
import { Http, RequestOptions, Headers, RequestOptionsArgs } from '@angular/http';
import { Router } from '@angular/router';
import { Post } from './models/post.model';
import { Comment } from './models/comment.model';
import { User } from './models/user.model';
import { Observable } from 'rxjs';
import * as  AppActions from './redux/actions'
import { AppStore, AppState } from './redux/store'
import 'rxjs';
import { Store, Action } from 'redux';
import { PostState } from './redux/post.reducer'

export const BackendAdress = 'http://10.6.6.126:3000'

@Injectable()
export class BackendService {
  results: Post[]
  user: User;

  constructor(@Inject(BackendAdress) private backUrl: string, public http: Http,
              @Inject(AppStore) private store: Store<AppState>,
              public router: Router){

    this.results=[];
  }
  testConn(): Observable<Object>{
    // let header = new Headers({mode: 'no-cors'})
    // let reqOptions = new RequestOptions({headers: header})
    return this.http.get(this.backUrl)
  }
  getPosts(){
    this.results=[];
    this.http.get(this.backUrl)
      .subscribe((res:any) => {
      res.json().content
      .map(item => this.results.push(new Post(item)))})
      this.store.dispatch(AppActions.getPosts(this.results))
  }
  userRegister(name:string, username:string, pass:string, passConfirm:string ){
    let userData = {
      name:name,
      username: username,
      pass: pass,
      passConfirm: passConfirm
    }
    this.http.post(this.backUrl+'/signin', userData)
    .subscribe( (res:any) =>{
      const response = JSON.parse(res._body);
      (response.error.error)? this.store.dispatch(AppActions.userError(response.error.message)): this.store.dispatch(AppActions.registerUser(response.content))
    })
  }
  userLogin(username:string, pass:string){
    let userData = {
      username: username,
      pass: pass
    };
    this.http.post(this.backUrl+'/users/login', userData, {withCredentials: true})
    .subscribe( (res:any) => {
      const response = JSON.parse(res._body);
      console.log(response);
      (response.error.error)? this.store.dispatch(AppActions.userError(response.error.message)):this.store.dispatch(AppActions.userLogin(response.content))
    })
  }
  newPost(title:string, text:string){
    let post = {
      date: new Date(),
      title: title,
      text: text,
      author: {
        _id: this.store['UserReducer']._id,
        username: this.store['UserReducer'].username
      }
    }
    this.http.post(this.backUrl+'/post', post, {withCredentials: true})
    .subscribe( (res:any) => {
        this.results.push(new Post(res._body.content.json()));
        this.store.dispatch(AppActions.getPosts(this.results))
    })
    this.router.navigate(['/home'])
  }
}
