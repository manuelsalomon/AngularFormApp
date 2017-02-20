import { Component, OnInit, Injectable, Inject } from '@angular/core';
import { AppStore } from '../redux/store'
import { Store } from 'redux';
import { AppState } from '../redux/store';
import { Post } from '../models/post.model';

@Component({
  selector: 'post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
})
export class PostListComponent implements OnInit {
  currentPosts: Post[];
  constructor(@Inject(AppStore) public store: Store<AppState>){
    this.readState()
  }
  readState(){
    const state: AppState = this.store.getState();
    this.currentPosts = state['PostReducer'].posts;
  }

  ngOnInit() {
    this.store.subscribe( () => {
      this.readState();
    })
  }


}
