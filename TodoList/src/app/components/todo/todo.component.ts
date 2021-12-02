import { Component, OnInit } from '@angular/core';
import { TODO } from '../../models/TODO';
import { TodoService } from '../../services/todo.service'
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todos: TODO[];
  constructor(private todoservice: TodoService) { }

  ngOnInit() {
    // here we are getting the promise. so we have to subcribe that
    this.todoservice.getTodos().subscribe(todos => {
      this.todos = todos
      console.log(this.todos)
    });
  }
  deleteTodo(todo: TODO) {
    console.log('delete me');
    //delete from  the UI
    this.todos = this.todos.filter(t => t.id !== todo.id);
    // Delete fro the Server
    this.todoservice.deleteTodo(todo).subscribe();
  }

  addTodo(todo: TODO) {
    this.todoservice.addTodo(todo).subscribe(todo => {
      this.todos.push(todo);
    })

  }
}