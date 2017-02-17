import { Action, Reducer }  from 'redux';
import * as AppActions from './actions';
import { User } from '../models/user.model';

export interface UserState {
  isLogged: boolean,
  username: string,
  name: string,
  imgUrl: string;
}
