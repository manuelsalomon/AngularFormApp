import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  inputs: ['post']
})
export class PostComponent implements OnInit {

  constructor( private ref: ChangeDetectorRef) { }

  ngOnInit() {
    this.ref.detectChanges();
  }
  readState(){

  }

}
