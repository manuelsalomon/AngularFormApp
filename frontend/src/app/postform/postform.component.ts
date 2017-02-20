import { Component, OnInit, Inject } from '@angular/core';
import { AppStore, AppState } from '../redux/store';
import { Store } from 'redux';
import { BackendService } from '../backend.service'

@Component({
  selector: 'postform',
  templateUrl: './postform.component.html',
  styleUrls: ['./postform.component.css']
})
export class PostformComponent implements OnInit {
  constructor(@Inject(AppStore) public store: Store<AppState>,
              @Inject(BackendService) public backend: BackendService) {

              }

  ngOnInit() {

  }
  sendPost(title, text) {
    this.backend.newPost(title, text);

  }

}
