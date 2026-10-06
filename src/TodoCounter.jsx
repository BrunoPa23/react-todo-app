import './TodoCounter.css';

function TodoCounter({ total, completed }) {
  if (total === 0) {
    return (
      <h1 className="TodoCounter">
        Todavia no tienes tareas
      </h1>
    );
  }

  return (
    <h1 className="TodoCounter">
      Has completado <span>{completed}</span> de <span>{total}</span> TODOs
    </h1>
  );
}

export { TodoCounter };
