export const allTodos = (state) => state.todoReducer;

export const selectVisibleTodos = (state, filter) => {
   switch (filter) {
      case 'all': {
         return state.todoReducer;
      }
      case 'active': {
         return state.todoReducer.filter((todo) => !todo.completed);
      }
      case 'completed': {
         return state.todoReducer.filter((todo) => todo.completed);
      }
      default: {
         return state.todoReducer;
      }
   }
};
