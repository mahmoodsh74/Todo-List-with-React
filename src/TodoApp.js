import React, { PureComponent } from 'react';

import TodoForm from './components/TodoForm';
import Title from './components/Title';
import TodoList from './components/TodoList';

window.id = 0;
class TodoApp extends PureComponent {
  constructor(props) {
    // Pass props to parent class
    super(props);

    // Set initial state
    this.state = {
      todos: [],
    };
  }

  // Lifecycle method
  componentDidMount(){
    const todos = JSON.parse(window.localStorage.getItem('todos'));

    if (todos) {
      this.setState({
        todos,
      });
    }
  }

  // Add todo handler
  addTodo = (val) => {
    // Assemble data
    const todo = { text: val, id: window.id++ };

    const todos = window.localStorage.getItem('todos');

    if (todos === null) {
      const todos = [];
      todos.push(todo);

      window.localStorage.setItem('todos', JSON.stringify(todos));
    } else {
      const oldTodos = JSON.parse(todos);
      oldTodos.push(todo);

      // then reset the localStorage
      window.localStorage.setItem('todos', JSON.stringify(oldTodos));
    }

    const newTodos = [
      ...this.state.todos,
      todo,
    ];

    this.setState({todos: newTodos});
  }

  // Handle remove
  handleRemove = (id) => () => {
    // Filter all todos except the one to be removed
    const remainder = this.state.todos.filter((todo) => {
      if(todo.id !== id) return todo;
    });

    window.localStorage.setItem('todos', JSON.stringify(remainder));

    this.setState({
      todos: remainder,
    });
  }

  render() {
    // Render JSX
    return (
      <div>
        <Title todoCount={this.state.todos.length} />
        <TodoForm addTodo={this.addTodo}/>
        <TodoList
          todos={this.state.todos}
          remove={this.handleRemove}
        />
      </div>
    );
  }
}

export default TodoApp;