import './App.css';
import TodoCreator from './components/TodoCreator/TodoCreator';
import TodoList from './components/TodoList/TodoList';

function App() {
   return (
      <div className="App">
         <TodoCreator />
         <TodoList />
      </div>
   );
}

export default App;
