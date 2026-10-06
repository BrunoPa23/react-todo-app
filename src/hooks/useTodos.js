import React from 'react';
import { useLocalStorage } from './useLocalStorage';

function useTodos(defaultTodos = []) {
  const [todos, setTodos] = useLocalStorage('TODOS_V1', defaultTodos);
  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  const searchedTodos = todos.filter(todo =>
    todo.text.toLowerCase().includes(searchValue.toLowerCase())
  );

  const addTodo = (text) => {
    if (!text || !text.trim()) {
      return;
    }
    setTodos([...todos, { text, completed: false }]);
  };

  const completeTodo = (text) => {
    const newTodos = todos.map(todo => {
      if (todo.text === text) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const newTodos = todos.filter(todo => todo.text !== text);
    setTodos(newTodos);
  };

  return {
    todos,
    searchValue,
    setSearchValue,
    searchedTodos,
    completedTodos,
    totalTodos,
    addTodo,
    completeTodo,
    deleteTodo,
  };
}

export { useTodos };
