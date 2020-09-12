import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Todo } from '../models/todo';

@Injectable({
  providedIn: 'root'
})
export class DataService implements OnInit {

  private todosSource = new BehaviorSubject<Todo[]>([])
  todos = this.todosSource.asObservable()
  private todosList : Todo[] = []

  private statusFilterSource = new BehaviorSubject<'all' | 'completed' | 'incomplete'>('all')
  statusFilter = this.statusFilterSource.asObservable()
  
  constructor() { 
    this.todos.subscribe(todos => this.todosList = todos)
  }

  ngOnInit() {
    console.log("hasidb")
    this.todos.subscribe(todos => this.todosList = todos)
  }

  setTodos(todos: Todo[]) {
    this.todosSource.next(todos);
  }

  setStatusFilter(filterStatus: 'all' | 'completed' | 'incomplete'){
    this.statusFilterSource.next(filterStatus)
  }

  deleteTodo(todoToDelete : Todo) {
    this.todosSource.next(this.todosList.filter(todo => todo.id != todoToDelete.id))
  }
  
  addTodo(todoToAdd : Todo) {
    this.todosSource.next([...this.todosList, todoToAdd])
  }

  updateTodos() {
    this.todosSource.next(this.todosList)
  }

}
