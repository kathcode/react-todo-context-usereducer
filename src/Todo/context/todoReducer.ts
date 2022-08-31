import { ITodoState, ITodo } from '../interfaces/interfaces';


export const INITIAL_STATE: ITodoState = {
  todoConunt: 0,
  todos: [
    { id: '1', desc: 'Historia', completed: false },
    { id: '2', desc: 'Ficción', completed: false }
  ],
  completed: 0,
  pending: 0,
}

type TodoAction =
  | { type: 'addTodo', payload: ITodo }
  | { type: 'toogleTodo', payload: string }

export const todoReducer = (state: ITodoState, action: TodoAction): ITodoState => {
  switch (action.type) {
    case 'addTodo':
      return {
        ...state,
        todos: [...state.todos, action.payload]
      }
    case 'toogleTodo':
      return {
        ...state,
        todos: state.todos.map(({ ...todo }) => {
          if (todo.id === action.payload) {
            todo.completed = !todo.completed
          }
          return todo
        })
      }
    default:
      return state
  }
}