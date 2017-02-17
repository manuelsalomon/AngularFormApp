import { Component, OnInit, Inject } from '@angular/core';
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-user-sign',
  templateUrl: './user-sign.component.html',
  styleUrls: ['./user-sign.component.css']
})
export class UserSignComponent implements OnInit {

  constructor(@Inject(BackendService) private backend: BackendService) {

  }
  ngOnInit() {
  }
  newUser(name, username, pass, passConfirm){
    this.backend.userRegister(name, username, pass, passConfirm)
  }

}
