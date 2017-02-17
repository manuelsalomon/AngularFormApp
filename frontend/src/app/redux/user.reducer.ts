import { Action, Reducer }  from 'redux';
import * as AppActions from './actions';
import { User } from '../models/user.model';

export interface UserState {
  isLogged: boolean,
  username: string,
  name: string,
  imgUrl: string;
  errorMessage: string;
  error: boolean;
}


const userInitialState = {
  isLogged: false,
  username: null,
  name: null,
  imgUrl: null,
  errorMessage: null,
  error: false,
}

export const UserReducer: Reducer<UserState> = (state:UserState = userInitialState, action) => {
  switch (action.type){
    case AppActions.USER_ERROR:
    console.log('llego');
      let error = Object.assign({}, state);
      error.error = true;
      error.errorMessage = action.errorMessage;
      console.log(error)
      return error;
    default:
      return state;

  }
}
