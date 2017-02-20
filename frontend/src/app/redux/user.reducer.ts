import { Action, Reducer }  from 'redux';
import * as AppActions from './actions';
import { User } from '../models/user.model';

export interface UserState {
  isLogged: boolean,
  _id: string,
  username: string,
  name: string,
  imgUrl: string;
  errorMessage: string;
  error: boolean;
}


const userInitialState = {
  isLogged: false,
  _id: null,
  username: null,
  name: null,
  imgUrl: null,
  errorMessage: null,
  error: false,
}

export const UserReducer: Reducer<UserState> = (state:UserState = userInitialState, action) => {
  switch (action.type){
    case AppActions.USER_VALIDATE:
      let validate = Object.assign({}, state);
      validate.isLogged = action.isLogged;
      return validate;
    case AppActions.USER_ERROR:
      let error = Object.assign({}, state);
      error.error = true;
      error.errorMessage = action.errorMessage;
      return error;
    case AppActions.USER_REGISTER:
      let register = Object.assign({}, state);
      register.isLogged = true;
      register.username = action.username;
      register.name = action.name;
      register._id = action._id;
      return register;
    case AppActions.USER_LOGIN:
      console.log('action',action);
      let login = Object.assign({}, state);
      login.isLogged = true;
      login.username = action.username;
      login.name = action.name;
      login._id = action._id;
      return login


    default:
      return state;

  }
}
