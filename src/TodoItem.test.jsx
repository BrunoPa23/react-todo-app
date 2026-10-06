import { render, screen, fireEvent } from '@testing-library/react';
import { describe, test, expect, vi } from 'vitest';
import { TodoItem } from './TodoItem';

describe('TodoItem', () => {
  test('muestra el texto de la tarea', () => {
    render(
      <TodoItem
        text="Comprar leche"
        completed={false}
        onComplete={() => {}}
        onDelete={() => {}}
        onEdit={() => {}}
      />
    );

    expect(screen.getByText('Comprar leche')).toBeInTheDocument();
  });

  test('llama a onComplete al hacer click en el icono de check', () => {
    const onComplete = vi.fn();
    render(
      <TodoItem
        text="Comprar leche"
        completed={false}
        onComplete={onComplete}
        onDelete={() => {}}
        onEdit={() => {}}
      />
    );

    fireEvent.click(screen.getByText('V'));

    expect(onComplete).toHaveBeenCalledTimes(1);
  });

  test('llama a onDelete al hacer click en el icono de eliminar', () => {
    const onDelete = vi.fn();
    render(
      <TodoItem
        text="Comprar leche"
        completed={false}
        onComplete={() => {}}
        onDelete={onDelete}
        onEdit={() => {}}
      />
    );

    fireEvent.click(screen.getByText('X'));

    expect(onDelete).toHaveBeenCalledTimes(1);
  });
});
