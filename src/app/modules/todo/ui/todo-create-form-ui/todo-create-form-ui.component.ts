import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-todo-create-form-ui',
  templateUrl: './todo-create-form-ui.component.html',
  styleUrls: ['./todo-create-form-ui.component.scss'],
})
export class TodoCreateFormUiComponent {
  name = '';

  @Output()
  create = new EventEmitter<string>();

  onCreate = (event: Event) => {
    this.create.emit(this.name);
    this.name = '';
  };
}
