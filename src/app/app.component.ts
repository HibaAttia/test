import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from "./authentication.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit(): void {
    this.authService.loadToken();
  }
  title = 'erp-front';

  constructor(private authService : AuthenticationService) {
  }

  isAdmin(){
    return this.authService.isAdmin();
  }
  isSystem(){
    return this.authService.isSystem();
  }

  isAuthenticated(){
    return this.authService.isAuthenticated();
  }
}

