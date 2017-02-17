import { Injectable, Inject } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Post } from './models/post.model';
import { Comment } from './models/comment.model';
import { User } from './models/user.model';
import { Observable } from 'rxjs';
import * as  AppActions from './redux/actions'
import { store, AppStore } from './redux/store'
import 'rxjs';
import { Store, Action } from 'redux';
import { PostState } from './redux/post.reducer'

export const BackendAdress = 'http://10.6.6.126:3000'

@Injectable()
export class BackendService {
  results: Post[]

  constructor(@Inject(BackendAdress) private backUrl: string, public http: Http, @Inject(AppStore) private store: Store<PostState> ){
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
      .subscribe(res => res.json()
      .map(item => this.results.push(new Post(item))))
      this.store.dispatch(AppActions.getPosts(this.results))
  }
}
