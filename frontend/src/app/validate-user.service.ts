import { Injectable, Inject } from '@angular/core';
import * as AppActions from './redux/actions';
import { Store } from 'redux';
import { AppState, AppStore } from './redux/store';

@Injectable()
export class ValidateUserService {

  constructor(@Inject(AppStore) public store: Store<AppState>){


  }
  validateUser(res:any){
    this.store.dispatch(AppActions.userValidate(res.status))
  }

}
