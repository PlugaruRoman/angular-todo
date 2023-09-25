import { Action } from '@ngrx/store';

export enum TodoActionsType {
  create = '[TODO] create todo item',
  toggle = '[TODO] toggle todo item',
  delete = '[TODO] delete todo item',
  edit = '[TODO] edit todo item',
}

export class TodoCreateAction implements Action {
  readonly type = TodoActionsType.create;

  constructor(public payload: { name: string }) {}
}

export class TodoDeleteAction implements Action {
  readonly type = TodoActionsType.delete;

  constructor(public payload: { id: number }) {}
}

export class TodoToggleAction implements Action {
  readonly type = TodoActionsType.toggle;

  constructor(public payload: { id: number }) {}
}

export class TodoEditAction implements Action {
  readonly type = TodoActionsType.edit;

  constructor(public payload: { id: number; name: string }) {}
}

export type TodoActions =
  | TodoCreateAction
  | TodoToggleAction
  | TodoDeleteAction
  | TodoEditAction;
