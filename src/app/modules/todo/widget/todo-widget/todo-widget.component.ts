import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { TodoState } from '../../store/todo.reducer';
import {
  TodoCreateAction,
  TodoDeleteAction,
  TodoEditAction,
  TodoToggleAction,
} from '../../store/todo.actions';
import { Observable } from 'rxjs';
import { ITodo } from '../../model/todo';
import { todoListSelector } from '../../store/todo.selectors';

@Component({
  selector: 'app-todo-widget',
  templateUrl: './todo-widget.component.html',
  styleUrls: ['./todo-widget.component.scss'],
})
export class TodoWidgetComponent {
  todoList: ITodo[] = [];
  todoList$: Observable<ITodo[]> = this.store$.pipe(select(todoListSelector));

  constructor(private store$: Store<TodoState>) {}

  onCreate = (name: string) => {
    this.store$.dispatch(new TodoCreateAction({ name }));
  };

  onDelete = (id: number) => {
    this.store$.dispatch(new TodoDeleteAction({ id }));
  };

  onToggle = (id: number) => {
    this.store$.dispatch(new TodoToggleAction({ id }));
  };

  onEdit = (event: { name: string; id: number }) => {
    this.store$.dispatch(new TodoEditAction(event));
  };
}
