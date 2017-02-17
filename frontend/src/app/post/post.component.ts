import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  inputs: ['post']
})
export class PostComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
