import { renderHook, act } from '@testing-library/react';
import { describe, test, expect, beforeEach } from 'vitest';
import { useTodos } from './useTodos';

beforeEach(() => {
  localStorage.clear();
});

describe('useTodos', () => {
  test('inicia con las tareas por defecto que se le pasan', () => {
    const defaultTodos = [{ text: 'Tarea 1', completed: false }];
    const { result } = renderHook(() => useTodos(defaultTodos));

    expect(result.current.todos).toHaveLength(1);
    expect(result.current.totalTodos).toBe(1);
  });

  test('addTodo agrega una tarea nueva', () => {
    const { result } = renderHook(() => useTodos([]));

    act(() => {
      result.current.addTodo('Nueva tarea');
    });

    expect(result.current.todos).toHaveLength(1);
    expect(result.current.todos[0].text).toBe('Nueva tarea');
    expect(result.current.todos[0].completed).toBe(false);
  });

  test('completeTodo alterna el estado completado de una tarea', () => {
    const defaultTodos = [{ text: 'Tarea 1', completed: false }];
    const { result } = renderHook(() => useTodos(defaultTodos));

    act(() => {
      result.current.completeTodo('Tarea 1');
    });

    expect(result.current.todos[0].completed).toBe(true);
    expect(result.current.completedTodos).toBe(1);
  });

  test('deleteTodo elimina una tarea de la lista', () => {
    const defaultTodos = [
      { text: 'Tarea 1', completed: false },
      { text: 'Tarea 2', completed: false },
    ];
    const { result } = renderHook(() => useTodos(defaultTodos));

    act(() => {
      result.current.deleteTodo('Tarea 1');
    });

    expect(result.current.todos).toHaveLength(1);
    expect(result.current.todos[0].text).toBe('Tarea 2');
  });
});
