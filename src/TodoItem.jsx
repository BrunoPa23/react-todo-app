import React from 'react';
import './TodoItem.css';

function TodoItem(props) {
  const [isEditing, setIsEditing] = React.useState(false);
  const [editText, setEditText] = React.useState(props.text);

  const startEditing = () => {
    setEditText(props.text);
    setIsEditing(true);
  };

  const saveEdit = () => {
    if (editText.trim() && editText !== props.text) {
      props.onEdit(editText);
    }
    setIsEditing(false);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      saveEdit();
    }
    if (event.key === 'Escape') {
      setEditText(props.text);
      setIsEditing(false);
    }
  };

  return (
    <li className="TodoItem">
      <span
        className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}
        onClick={props.onComplete}
      >
        V
      </span>

      {isEditing ? (
        <input
          className="TodoItem-input"
          autoFocus
          value={editText}
          onChange={(event) => setEditText(event.target.value)}
          onBlur={saveEdit}
          onKeyDown={handleKeyDown}
        />
      ) : (
        <p
          className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}
          onDoubleClick={startEditing}
        >
          {props.text}
        </p>
      )}

      <span
        className="Icon Icon-edit"
        onClick={startEditing}
      >
        E
      </span>
      <span
        className="Icon Icon-delete"
        onClick={props.onDelete}
      >
        X
      </span>
    </li>
  );
}

export { TodoItem };
