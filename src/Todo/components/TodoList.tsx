import { TodoItem } from "./TodoItem";
import { useTodo } from '../hooks/useTodo';

export const TodoList = () => {
  const { todos } = useTodo()

  return (<ul>
    {todos.map(todo => <TodoItem key={todo.id} todo={todo} />)}
  </ul>)
}