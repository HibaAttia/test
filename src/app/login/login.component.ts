import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../authentication.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthenticationService) { }

  ngOnInit() {
  }
  onLogin(data) {
    this.authService.login(data)
      .subscribe(resp => {
          console.log(resp);
          console.log(resp.headers['authorization']);
      }, err => {

      });
  }

}
