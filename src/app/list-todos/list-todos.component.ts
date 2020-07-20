import { Component, OnInit, OnChanges } from '@angular/core';
import { TodoDataService } from '../services/todo-data.service';
import { Todo } from '../classes/todo'

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  errorMessage: string = "All fields should not be empty";
  emptyField = false;

  newTodo: Todo = new Todo();

  constructor(private todoDataService: TodoDataService) { }

  ngOnInit() {
  }

  addTodo() {
    if ( this.newTodo.name == null || this.newTodo.email == null || this.newTodo.address == null || this.newTodo.phone == null ) {
      this.emptyField = true
    }
    else {
      this.emptyField = false
      this.todoDataService.addTodo(this.newTodo);
      this.newTodo = new Todo();
    }
  }

  doneTodo(todo) {
    this.todoDataService.doneTodo(todo);
  }

  removeTodo(todo) {
    this.emptyField = false
    this.todoDataService.deleteTodoById(todo.id);
  }

  get todos() {
    return this.todoDataService.getAllTodos();
  }

  // consoleAllTodos() {
  //   this.todoDataService.consoleAllTodos();
  // }

}
