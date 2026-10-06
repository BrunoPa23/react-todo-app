import React from 'react';
import { useLocalStorage } from './useLocalStorage';

const FILTER_ALL = 'ALL';
const FILTER_ACTIVE = 'ACTIVE';
const FILTER_COMPLETED = 'COMPLETED';

function useTodos(defaultTodos = []) {
  const [todos, setTodos] = useLocalStorage('TODOS_V1', defaultTodos);
  const [searchValue, setSearchValue] = React.useState('');
  const [filter, setFilter] = React.useState(FILTER_ALL);

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  const filteredTodos = todos.filter(todo => {
    if (filter === FILTER_ACTIVE) {
      return !todo.completed;
    }
    if (filter === FILTER_COMPLETED) {
      return !!todo.completed;
    }
    return true;
  });

  const searchedTodos = filteredTodos.filter(todo =>
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

  const editTodo = (oldText, newText) => {
    if (!newText || !newText.trim() || oldText === newText) {
      return;
    }
    const newTodos = todos.map(todo => {
      if (todo.text === oldText) {
        return { ...todo, text: newText };
      }
      return todo;
    });
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
    editTodo,
    filter,
    setFilter,
  };
}

export { useTodos, FILTER_ALL, FILTER_ACTIVE, FILTER_COMPLETED };
