import { act } from '@ngrx/effects';
import { ITodo } from '../model/todo';
import { TodoActions, TodoActionsType, TodoDeleteAction } from './todo.actions';

export const TODO_REDUCER_NODE = 'todo';

export interface TodoState {
  idIncrement: number;
  todoList: ITodo[];
}

const initialState: TodoState = {
  idIncrement: 1,
  todoList: [],
};

export const todoReducer = (state = initialState, action: TodoActions) => {
  switch (action.type) {
    case TodoActionsType.create:
      return {
        ...state,
        idIncrement: state.idIncrement + 1,
        todoList: [
          ...state.todoList,
          {
            id: state.idIncrement,
            name: action.payload.name,
            completed: false,
          },
        ],
      };

    case TodoActionsType.delete:
      return {
        ...state,
        todoList: state.todoList.filter(
          (todo) => todo.id !== action.payload.id
        ),
      };

    case TodoActionsType.toggle:
      return {
        ...state,
        todoList: state.todoList.map((todo) =>
          todo.id === action.payload.id
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
      };

    case TodoActionsType.edit:
      return {
        ...state,
        todoList: state.todoList.map((todo) =>
          todo.id === action.payload.id
            ? { ...todo, name: action.payload.name }
            : todo
        ),
      };

    default:
      return state;
  }
};
