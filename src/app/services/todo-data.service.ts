import { Injectable } from '@angular/core';

import { Todo } from '../classes/todo'

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  lastId: number = 0;

  todos: Todo[] = [];

  constructor() { }

  addTodo(todo: Todo): TodoDataService {
    if (!todo.id) {
      todo.id = ++this.lastId;
    }
    this.todos.push(todo);
    return this;
  }

  doneTodo(todo: Todo) {
    let updatedTodo = this.updateTodoById(todo.id, {
      done: !todo.done
    });
    return updatedTodo;
  }

  updateTodoById(id: number, values: Object = {}): Todo {
    let todo = this.getTodoById(id);
    if (!todo) {
      return null;
    }
    Object.assign(todo, values);
    return todo;
  }

  getTodoById(id: number): Todo {
    return this.todos
      .filter(todo => todo.id === id)
      .pop();
  }

  deleteTodoById(id: number): TodoDataService {
    this.todos = this.todos.filter(todo => todo.id !== id);
    this.updateIdsAfterDelete(id)
    return this;
  }

  updateIdsAfterDelete(id: number) {
    this.todos.forEach(todo => {
      if (todo.id > id)
        todo.id--;
    });
    this.lastId--;
  }

  getAllTodos(): Todo[] {
    return this.todos;
  }

  // consoleAllTodos() {
  //   console.log(this.todos);
  // }

}
