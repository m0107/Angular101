import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
//import { baseurl } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  constructor(private http: HttpClient) { }
  login(data: any): Observable<any> {
    return this.http.post(`http//localhost:9999/auth/login`, data);
  }
}
