import { ITodo } from "../interfaces/interfaces";
import { useTodo } from '../hooks/useTodo';

interface props {
  todo: ITodo
}

export const TodoItem = ({ todo }: props) => {
  const { toggleTodo } = useTodo()

  const handleDbClick = () => {
    toggleTodo(todo.id)
  }

  return (<li
    style={{ cursor: 'pointer', textDecoration: todo.completed ? 'line-through' : '' }}
    onDoubleClick={handleDbClick}
  >{todo.desc}</li>
  )
}