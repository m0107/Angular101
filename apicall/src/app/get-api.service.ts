import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class GetApiService {

  constructor(
    private http:HttpClient
  ) { }

  apiCall()
  {
    return this.http.get('https://jsonplaceholder.typicode.com/todos/1');
  }

  apiCall1()
  {
    return this.http.get('https://jsonplaceholder.typicode.com/todos/2');
  }

  apiCall2()
  {
    return this.http.get('https://jsonplaceholder.typicode.com/todos/3');
  }

  apiCall3()
  {
    return this.http.get('https://jsonplaceholder.typicode.com/todos/4');
  }

  apiCall4()
  {
    return this.http.get('https://jsonplaceholder.typicode.com/todos/5');
  }

  apiCall5()
  {
    return this.http.get('https://jsonplaceholder.typicode.com/todos/6');
  }

  apiCall6()
  {
    return this.http.get('https://jsonplaceholder.typicode.com/todos/7');
  }

  apiCall7()
  {
    return this.http.get('https://jsonplaceholder.typicode.com/todos/3');
  }
}
