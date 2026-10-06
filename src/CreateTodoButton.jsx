import './CreateTodoButton.css';

function CreateTodoButton({ onCreate }) {
  const handleClick = () => {
    const text = window.prompt('Escribe el texto de la nueva tarea');
    if (onCreate) {
      onCreate(text);
    }
  };

  return (
    <button className="CreateTodoButton" onClick={handleClick}>
      +
    </button>
  );
}

export { CreateTodoButton };
