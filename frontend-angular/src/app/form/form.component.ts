import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  inputText = ''
  constructor(private data : DataService) { }

  setInputTextHandler(event: any) {
    this.setInputText(event.target.value)
  }

  submitTodo(event: any ) {
    event.preventDefault();
    this.data.addTodo({text: this.inputText, id: Math.random() * 1000, completed: false})
    this.setInputText('')
  }

  setInputText(inputText: string) {
    this.inputText = inputText
  }

  setStatusFilterHandler(event: any) {
    this.data.setStatusFilter(event.target.value)
  }
}