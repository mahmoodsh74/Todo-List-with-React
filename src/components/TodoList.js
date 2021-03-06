import React from 'react';

import Todo from './Todo';

const TodoList = ({todos, remove}) => {
  // Map through the todos
  const todoNode = todos.map((todo) => {
    return (
      <Todo todo={todo} key={todo.id} remove={remove}/>
    );
  });

  return (
    <ul
      className="list-group"
      style={{marginTop:'30px'}}
    >
      {todoNode}
    </ul>
  );
};

export default TodoList;