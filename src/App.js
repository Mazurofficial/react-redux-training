import './App.css';
import Filter from './components/Filter/Filter';
import TodoCreator from './components/TodoCreator/TodoCreator';
import TodoList from './components/TodoList/TodoList';

function App() {
   return (
      <div className="App">
         <TodoCreator />
         <Filter />
         <TodoList />
      </div>
   );
}

export default App;
