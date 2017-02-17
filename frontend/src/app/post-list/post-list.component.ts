import { Component, OnInit, Injectable, Inject } from '@angular/core';
import { AppStore } from '../redux/store'
import { Store } from 'redux';
import { PostState } from '../redux/post.reducer';
import { Post } from '../models/post.model';

@Component({
  selector: 'post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
})
export class PostListComponent implements OnInit {
  currentPosts: Post[];
  constructor(@Inject(AppStore) public store: Store<PostState>){
    this.readState()
  }
  readState(){
    const state: PostState = this.store.getState();
    this.currentPosts = state.posts;
  }

  ngOnInit() {
    this.store.subscribe( () => {
      this.readState();
    })
  }


}
