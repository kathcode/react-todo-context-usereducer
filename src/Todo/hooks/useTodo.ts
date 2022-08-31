import { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';

export const useTodo = () => {
  const { todoState, toggleTodo } = useContext(TodoContext);

  return {
    todos: todoState.todos,
    toggleTodo
  }
}