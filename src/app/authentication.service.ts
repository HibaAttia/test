import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  host = "http://localhost:9100";
  constructor(private http: HttpClient) { }

  login(data) {
    return this.http.post(this.host, data, {observe: 'response'});
  }
}
