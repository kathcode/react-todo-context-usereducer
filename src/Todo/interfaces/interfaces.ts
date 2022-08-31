
export interface ITodo {
  id: string;
  desc: string;
  completed: boolean
}

export interface ITodoState {
  todoConunt: number;
  todos: ITodo[];
  completed: number;
  pending: number;
}

export interface TodoProviderProps {
  children: JSX.Element | JSX.Element[]
}