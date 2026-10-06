import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import { useTodos } from './hooks/useTodos';

const defaultTodos = [
  { text: 'Cortar cebolla', completed: true },
  { text: 'Aprender React', completed: false },
  { text: 'Llorar con la Llorona', completed: false },
  { text: 'LALALALALA', completed: false },
  { text: 'Usar estados derivados', completed: true },

];

function App() {
  const {
    searchValue,
    setSearchValue,
    searchedTodos,
    completedTodos,
    totalTodos,
    addTodo,
    completeTodo,
    deleteTodo,
  } = useTodos(defaultTodos);

  return (
    <>
      <TodoCounter
        completed={completedTodos}
        total={totalTodos}
      />
      <TodoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />

      <TodoList>
        {searchedTodos.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>

      <CreateTodoButton onCreate={addTodo} />
    </>
  );
}

export default App;
