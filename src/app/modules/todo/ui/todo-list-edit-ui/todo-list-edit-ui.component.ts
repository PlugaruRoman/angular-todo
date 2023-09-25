import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ITodo } from '../../model/todo';

@Component({
  selector: 'app-todo-list-edit-ui',
  templateUrl: './todo-list-edit-ui.component.html',
  styleUrls: ['./todo-list-edit-ui.component.scss'],
})
export class TodoListEditUiComponent implements OnInit {
  name?: string = '';

  @Input()
  todo?: ITodo;

  @Output()
  edit = new EventEmitter<string>();

  ngOnInit(): void {
    this.name = this?.todo?.name;
  }

  onEdit() {
    if (this.name) {
      this.edit.emit(this.name);
    }
  }

  onCancel() {
    this.name = this?.todo?.name;
  }
}
