import { createContext } from "react";
import { ITodoState } from '../interfaces/interfaces';


export type TodoContextProps = {
  todoState: ITodoState;
  toggleTodo: (id: string) => void
}

const initialState = {}

export const TodoContext = createContext<TodoContextProps>(initialState as TodoContextProps)