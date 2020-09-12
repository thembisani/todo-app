import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Todo } from '../models/todo';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  todos : Todo[] = []
  fitleredTodos: Todo[]
  statusFilter : 'all' | 'completed' | 'incomplete' = 'all'

  constructor(private data: DataService) { }

  ngOnInit(): void {
    this.data.statusFilter.subscribe(statusFilter => {
      this.statusFilter = statusFilter
      this.setFilterdTodos()
    })
    this.data.todos.subscribe(todos => {
      this.todos = todos
      this.setFilterdTodos();
    })
  }

  setFilterdTodos() {
    this.fitleredTodos = this.todos.filter(todo => {
      switch (this.statusFilter) {
        case 'completed':
          return todo.completed
        case 'incomplete': 
          return !todo.completed
        default:
          return true
      }
    })
  }
}