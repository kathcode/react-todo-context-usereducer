import { useReducer } from 'react';
import { TodoProviderProps, ITodoState } from '../interfaces/interfaces';
import { TodoContext } from './TodoContext';
import { INITIAL_STATE, todoReducer } from './todoReducer';


// HOC
export const TodoProvider = ({ children }: TodoProviderProps) => {
  const [todoState, dispatch] = useReducer(todoReducer, INITIAL_STATE)

  const toggleTodo = (id: string) => {
    dispatch({ type: 'toogleTodo', payload: id })
  }

  return (<TodoContext.Provider value={{ todoState, toggleTodo }}>
    {children}
  </TodoContext.Provider>)
}