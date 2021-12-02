import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { TODO } from 'src/app/models/TODO';
import { TodoService } from '../../services/todo.service'

@Component({
  selector: 'app-todo-items',
  templateUrl: './todo-items.component.html',
  styleUrls: ['./todo-items.component.css']
})
export class TodoItemsComponent implements OnInit {
  @Input() todo: TODO;
  @Output() deleteTodo: EventEmitter<TODO> = new EventEmitter();
  constructor(private todoService: TodoService) { }

  ngOnInit() {
  }

  //Set Dynamic Classes
  setClasses() {
    let classes = {
      todo: true,
      'is-complete': this.todo.completed
    }
    return classes;
  }
  onToggle(todo) {
    //toggel in UI
    todo.completed = !todo.completed
    //toggle on Server
    this.todoService.toggleCompleted(todo).subscribe(
      todo => console.log(todo));

  }
  onDelete(todo) {
    this.deleteTodo.emit(todo)
  }


}
