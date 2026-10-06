import './TodoFilter.css';
import { FILTER_ALL, FILTER_ACTIVE, FILTER_COMPLETED } from './hooks/useTodos';

function TodoFilter({ filter, setFilter }) {
  return (
    <div className="TodoFilter">
      <button
        className={`TodoFilter-button ${filter === FILTER_ALL && 'TodoFilter-button--active'}`}
        onClick={() => setFilter(FILTER_ALL)}
      >
        Todas
      </button>
      <button
        className={`TodoFilter-button ${filter === FILTER_ACTIVE && 'TodoFilter-button--active'}`}
        onClick={() => setFilter(FILTER_ACTIVE)}
      >
        Pendientes
      </button>
      <button
        className={`TodoFilter-button ${filter === FILTER_COMPLETED && 'TodoFilter-button--active'}`}
        onClick={() => setFilter(FILTER_COMPLETED)}
      >
        Completadas
      </button>
    </div>
  );
}

export { TodoFilter };
