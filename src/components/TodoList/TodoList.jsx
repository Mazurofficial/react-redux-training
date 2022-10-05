import React from 'react';
import { useDispatch } from 'react-redux';
import { removeTodo } from '../../store/actions/todo-actions';
import { toggleTodo } from '../../store/actions/todo-actions';
import { useSelector } from 'react-redux';
import { selectVisibleTodos } from '../../store/selectors/todos-selectors';
import { selectActiveFilter } from '../../store/selectors/filters-selectors';

export default function TodoList() {
   const dispatch = useDispatch();
   const activeFilter = useSelector(selectActiveFilter);
   const todos = useSelector((state) =>
      selectVisibleTodos(state, activeFilter)
   );

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
