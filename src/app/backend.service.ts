import { Injectable, Inject } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Post } from './models/post.model';
// import { Comment } from './models/comment.model';
import { User } from './models/user.model';
import { Observable } from 'rxjs';
import 'rxjs';

export const BackendAdress = 'http://10.6.6.126:3000'

@Injectable()
export class BackendService {
  constructor(@Inject(BackendAdress) private backUrl: string, public http: Http ){
  }
  testConn(): Observable<Object>{
    // let header = new Headers({mode: 'no-cors'})
    // let reqOptions = new RequestOptions({headers: header})
    return this.http.get(this.backUrl)
  }
  getPosts(){
    return this.http.get(this.backUrl)
      .subscribe(res => res.json()
      .map(item => console.log(new Post(item))))
  }
}
