import { Component, OnInit, Inject, Input } from '@angular/core';
import { Router } from '@angular/router';
import { BackendService } from '../backend.service';
import { Post } from '../models/post.model';
import { AppStore, AppState } from '../redux/store';
import { Store } from 'redux';
import { User } from '../models/user.model';

@Component({
  selector: 'new-comment',
  templateUrl: './new-comment.component.html',
  styleUrls: ['./new-comment.component.css'],
  inputs: ['post1']
})

export class NewCommentComponent implements OnInit {
  userId: string;
  username: string;
  constructor(@Inject(BackendService) public backend: BackendService,
              @Inject(AppStore) public store: Store<AppState>,
              @Inject(Router) public router: Router) {
                // this.readState();
  }
  readState(){
    const state: AppState = this.store.getState();
    this.username = state['UserReducer'].username;
    this.userId = state['UserReducer']._id;
  }
  newComment(body, postId){
    console.log(body , postId)
    this.backend.newComment(body, postId);
    this.router.navigate(['/home'])
  }


  ngOnInit() {
    this.readState();
    this.store.subscribe(()=> {
      this.readState();
    })
  }


}
