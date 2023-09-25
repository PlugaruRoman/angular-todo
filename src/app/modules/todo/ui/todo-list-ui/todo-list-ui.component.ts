import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ITodo } from '../../model/todo';

@Component({
  selector: 'app-todo-list-ui',
  templateUrl: './todo-list-ui.component.html',
  styleUrls: ['./todo-list-ui.component.scss'],
})
export class TodoListUiComponent implements OnInit {
  editList: number[] = [];

  @Input()
  todoList: ITodo[] | null = [];

  @Output()
  delete = new EventEmitter<number>();

  @Output()
  toggle = new EventEmitter<number>();

  @Output()
  edit = new EventEmitter<{ name: string; id: number }>();

  constructor() {}

  ngOnInit(): void {}

  deleteTodo(id: number) {
    this.delete.emit(id);
  }

  toggleTodo(id: number) {
    this.toggle.emit(id);
  }

  addToEdit(id: number) {
    this.editList.push(id);
  }

  editTodo(name: string, id: number) {
    this.edit.emit({ name, id });
    this.editList = this.editList.filter((todoId) => todoId !== id);
  }
}
