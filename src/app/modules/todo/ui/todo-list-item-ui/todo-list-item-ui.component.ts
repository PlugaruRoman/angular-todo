import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ITodo } from '../../model/todo';

@Component({
  selector: 'app-todo-list-item-ui',
  templateUrl: './todo-list-item-ui.component.html',
  styleUrls: ['./todo-list-item-ui.component.scss'],
})
export class TodoListItemUiComponent implements OnInit {
  @Input()
  todo?: ITodo;

  @Output()
  delete = new EventEmitter<void>();

  @Output()
  edit = new EventEmitter<void>();

  @Output()
  toggle = new EventEmitter<void>();

  constructor() {}

  ngOnInit(): void {}

  deleteTodo() {
    this.delete.emit();
  }

  editTodo() {
    this.edit.emit();
  }

  toggleTodo(event: Event) {
    event.preventDefault();
    this.toggle.emit();
  }
}
