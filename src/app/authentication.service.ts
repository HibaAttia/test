import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {JwtHelperService} from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  host = "http://localhost:9100";
  jwt:string;
  username:string;
  role:string;

  constructor(private http: HttpClient) { }

  login(data) {
    return this.http.post(this.host, data, {observe: 'response'});
  }

  saveToken(jwt: string) {
    localStorage.setItem('token',jwt);
    this.jwt=jwt;
    this.parseJWT();
  }

  private parseJWT() {
    let jwtHelper=new JwtHelperService();
    let objJWT=jwtHelper.decodeToken(this.jwt);
    this.username= objJWT.sub;
    this.role=objJWT.authorities;
  }

  isAdmin(){
    return this.role.indexOf('ROLE_ADMIN') >= 0;
  }

  isSystem(){
    return this.role.indexOf('ROLE_SYSTEM') >= 0;
  }

  isAuthenticated(){
    return this.role && (this.isAdmin() || this.isSystem());
  }

  loadToken() {
    this.jwt = localStorage.getItem('token');
    this.parseJWT();
  }
}
