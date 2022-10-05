import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from '../constants/constants';

export const todoReducer = (state = [], action) => {
   switch (action.type) {
      case ADD_TODO: {
         return [
            ...state,
            { id: Date.now(), title: action.title, completed: false },
         ];
      }
      case REMOVE_TODO: {
         return state.filter((todo) => todo.id !== action.id);
      }
      case TOGGLE_TODO: {
         return state.map((todo) =>
            todo.id === action.id
               ? { ...todo, completed: !todo.completed }
               : todo
         );
      }
      default: {
         return state;
      }
   }
};
