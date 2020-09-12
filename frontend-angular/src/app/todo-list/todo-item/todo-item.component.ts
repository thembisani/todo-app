import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/models/todo';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent {
  @Input() todo: Todo;

  constructor(private data : DataService) { }

  deleteToto() {
    this.data.deleteTodo(this.todo);
  }

  completeTodo() {
    this.todo.completed = !this.todo.completed;
    this.data.updateTodos()
  }
}
