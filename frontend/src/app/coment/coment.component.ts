import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'coment',
  templateUrl: './coment.component.html',
  styleUrls: ['./coment.component.css'],
  inputs: ['comment']
})
export class ComentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
