import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';

const defaultTodos = [
  { text: 'Cortar cebolla', completed: true },
  { text: 'Aprender React', completed: false },
  { text: 'Llorar con la Llorona', completed: false },
  { text: 'LALALALALA', completed: false },
  { text: 'Usar estados derivados', completed: true },

];

const LOCAL_STORAGE_KEY = 'TODOS_V1';

function App() {
  const [todos, setTodos] = React.useState(() => {
    try {
      const localStorageTodos = localStorage.getItem(LOCAL_STORAGE_KEY);
      return localStorageTodos ? JSON.parse(localStorageTodos) : defaultTodos;
    } catch (error) {
      return defaultTodos;
    }
  });

  React.useEffect(() => {
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
    } catch (error) {
      // si localStorage no esta disponible, las tareas no se persisten
    }
  }, [todos]);

  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter(
    todo => !!todo.completed
  ).length;
  const totalTodos = todos.length;

  const searchedTodos = todos.filter(todo =>
    todo.text.toLowerCase().includes(searchValue.toLowerCase())
  );
  console.log('Los usuarios buscan todos de ' + 
  searchValue);

  return (
    <>
      <TodoCounter 
      completed={completedTodos} 
      total={totalTodos} 
      />
      <TodoSearch 
      searchValue= {searchValue}
      setSearchValue={setSearchValue}
      />

      <TodoList>
        {searchedTodos.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
          />
        ))}
      </TodoList>
      
      <CreateTodoButton />
    </>
  );
}

export default App;
