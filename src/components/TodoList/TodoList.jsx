import React from 'react';
import { useDispatch } from 'react-redux';
import { removeTodo } from '../../store/actions/todo-actions';
import { toggleTodo } from '../../store/actions/todo-actions';
import { useSelector } from 'react-redux';
import { allTodos } from '../../store/selectors/todos-selectors';

export default function TodoList() {
   const dispatch = useDispatch();
   const todos = useSelector(allTodos);

   return (
      <ul>
         {todos.map((todo) => (
            <li key={todo.id}>
               <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => dispatch(toggleTodo(todo.id))}
               />
               {todo.title}
               <button onClick={() => dispatch(removeTodo(todo.id))}>
                  delete
               </button>
            </li>
         ))}
      </ul>
   );
}
