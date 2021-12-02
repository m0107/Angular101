import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { TODO } from '../models/TODO';
import { Observable } from 'rxjs';
const httpOptions = {
  headers: new HttpHeaders({
    'content-Type': 'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todoUrls: string = 'https://jsonplaceholder.typicode.com/todos';
  todoLimits = '?_limit=5'

  constructor(private http: HttpClient) { }
  //get TOdos
  getTodos(): Observable<TODO[]> {
    return this.http.get<TODO[]>(`${this.todoUrls}${this.todoLimits}`);
  }


  // Delete
  deleteTodo(todo: TODO): Observable<TODO> {
    const url = `${this.todoUrls}/${todo.id}`
    return this.http.delete<TODO>(url, httpOptions);
  }

  //AddTodo
  addTodo(todo: TODO): Observable<TODO> {
    return this.http.post<TODO>(this.todoUrls, todo, httpOptions);

  }
  //toggle completed
  toggleCompleted(todo: TODO): Observable<any> {
    const url = `${this.todoUrls}/${todo.id}`
    return this.http.put(url, todo, httpOptions);

  }
}
