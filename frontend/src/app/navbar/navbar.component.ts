import { Component, OnInit, Inject } from '@angular/core';
import { BackendService } from '../backend.service';
import { AppStore, AppState } from '../redux/store';
import { Store } from 'redux';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  error: boolean;
  errorMessage: string;
  username: string;
  name: string;
  _id: string;
  isLogged: boolean;
  constructor(@Inject(BackendService) public backend: BackendService,
              @Inject(AppStore) public store: Store<AppState>) {
    this.error = false;
    this.errorMessage = '';
    this.isLogged = false;
    this.username = null;
    this.name = null;
    this._id = null;
    this.readState();
  }
  readState(){
    const state: AppState = this.store.getState();
    this.isLogged = state['UserReducer'].isLogged;
    this.error = state['UserReducer'].error;
    this.errorMessage = state['UserReducer'].errorMessage;
    this.username = state['UserReducer'].username;
    this.name = state['UserReducer'].name;
    this._id = state['UserReducer']._id;
  }
  ngOnInit() {
    this.store.subscribe(() => {
      this.readState()
    })
  }
  userLogin(username:string, password:string){
    this.backend.userLogin(username, password);
  }
  logout(){
    console.log('en funcion logout');
    this.backend.userLogout();
  }
}
