import { Component, OnInit, Inject } from '@angular/core';
import {  Router } from '@angular/router'
import { BackendService } from '../backend.service';
import { Store } from 'redux';
import { AppStore, AppState } from '../redux/store'
import { UserState } from '../redux/user.reducer'
import { routes } from '../app.module'

@Component({
  selector: 'app-user-sign',
  templateUrl: './user-sign.component.html',
  styleUrls: ['./user-sign.component.css']
})
export class UserSignComponent implements OnInit {
  error: boolean;
  errorMessage: string;
  isLogged: boolean;

  constructor(@Inject(BackendService) private backend: BackendService,
              @Inject(AppStore) public store: Store<AppState>,
              @Inject(Router) public router: Router) {
    this.error = false;
    this.errorMessage = '';
    this.isLogged = false;
    this.readState();
  }
  readState(){
    const state: AppState = this.store.getState();
    this.error = state['UserReducer'].error;
    this.errorMessage = state['UserReducer'].errorMessage;
    this.isLogged = state['UserReducer'].isLogged
    console.log(this.error,'this error');
    if(this.isLogged){
      this.router.navigate(['/home']);
    }

  }
  ngOnInit() {
    this.store.subscribe(() => {
      this.readState();
    })

  }
  newUser(name, username, pass, passConfirm){
    this.backend.userRegister(name, username, pass, passConfirm);
  }

}
