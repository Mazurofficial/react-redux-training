import React from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../store/actions/todo-actions';

export default function TodoCreator() {
   const dispatch = useDispatch();

   const handleSubmit = (event) => {
      event.preventDefault();

      dispatch(addTodo(event.target.title.value));
      event.target.reset();
   };

   return (
      <>
         <h1>Create todo</h1>
         <form onSubmit={handleSubmit}>
            <input name="title" type="text" placeholder="todo" />
            <input type="submit" value="add todo" />
         </form>
      </>
   );
}
