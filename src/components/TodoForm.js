import React from 'react';

const TodoForm = ({addTodo}) => {
  // Input tracker
  let input;

  return (
    <div className="input-group mb-3">
      <input
        type="text"
        className="form-control"
        ref={node => input = node}
        placeholder="Todo title"
        aria-label="Todo title"
      />

      <div className="input-group-append">
        <button
          className="btn btn-outline-secondary"
          type="button"
          onClick={() => {
            addTodo(input.value);
            input.value = '';
          }}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default TodoForm;