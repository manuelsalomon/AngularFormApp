import { Component } from '@angular/core';
import { BackendService } from './backend.service';
import { Http } from '@angular/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent {
  constructor(public backend: BackendService, public http: Http){

  }
  getThem(){
    this.backend.getPosts();
  }

}
