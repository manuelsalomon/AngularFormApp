import { Component, Inject } from '@angular/core';
import { BackendService, BackendAdress } from './backend.service';
import { Http } from '@angular/http';
import * as AppActions from './redux/actions';
import { Store } from 'redux';
import { AppStore, AppState } from './redux/store';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent {
  constructor(public backend: BackendService, public http: Http,
              @Inject(BackendAdress) private backUrl: string,
              @Inject(AppStore) public store: Store<AppState>){

  }
ngOnInit(){
    this.backend.getPosts();
    // this.http.get(this.backUrl+'/users/validate', {withCredentials: true})
    // .subscribe( (res:any)=> {
    //   console.log(res);
    //   this.store.dispatch(AppActions.userValidate(res))
    // }
    // )


    // this.store.dispatch(AppActions.getPosts())
  }

}
