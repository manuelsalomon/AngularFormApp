import { Component, OnInit, Inject } from '@angular/core';
import { BackendService } from '../backend.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(@Inject(BackendService) public backend: BackendService) { }

  ngOnInit() {
  }
  userLogin(username:string, password:string){
    this.backend.userLogin(username, password);
  }
}
