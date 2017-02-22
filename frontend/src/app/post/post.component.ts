import { Component, OnInit, Inject, ChangeDetectorRef } from '@angular/core';
import { BackendService } from '../backend.service';


@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  inputs: ['post']
})
export class PostComponent implements OnInit {
  clicked: boolean;
  edit: boolean;
  constructor( private ref: ChangeDetectorRef,
              @Inject(BackendService) public backend: BackendService) {
  this.clicked = false;
  this.edit = false;
}
  ngOnInit() {
    this.ref.detectChanges();
  }
  deletePost(postId:string){
    this.backend.deletePost(postId);
  }
  editPost(postId:string, body:string, title:string){
    this.backend.editPost(postId, body, title);
  }

}
