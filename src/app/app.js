import React, { Component } from 'react';
import AddTodo from './components/addForm';
import Todos from './components/todo';
import Mode from './components/mode';
import TodoTime from './components/todo-time';
import '../main.css';

class App extends Component {
  state = {
    todos: [],
  };

  addTodo = (todo) => {
    todo.id = this.state.todos.length + 1;
    let todos = [...this.state.todos, todo];
    this.setState({
      todos,
    });
  };

  deleteTodo = (id) => {
    const todos = this.state.todos.filter((todo) => {
      return todo.id !== id;
    });
    this.setState({
      todos,
    });
  };

  tickTodo = (id) => {
    let tick = document.getElementById(id);

    if (tick.classList.contains('fa-circle')) {
      tick.classList.remove('fa-circle');
      tick.classList.add('fa-check-circle');
    } else if (tick.classList.contains('fa-check-circle')) {
      tick.classList.remove('fa-check-circle');
      tick.classList.add('fa-circle');
    }

    if (tick.classList.contains('fa-check-circle')) {
      tick.nextElementSibling.style.textDecoration = 'line-through';
      tick.nextElementSibling.style.color = 'var(--desaturated-blue-text)';
    } else if (tick.classList.contains('fa-circle')) {
      tick.nextElementSibling.style.textDecoration = 'none';
      tick.nextElementSibling.style.color = 'var(--white-text)';
    }
  };

  render() {
    return (
      <div className="app">
        <div className="header">
          <div className="first">
            <TodoTime />
            <div className="mode">
              <Mode />
            </div>
          </div>
        
        </div>
        <div className="todoContainer">
          <Todos
            todos={this.state.todos}
            deleteTodo={this.deleteTodo}
            tickTodo={this.tickTodo}
          />
        </div>
        <div className="inputContainer">
          <AddTodo addTodo={this.addTodo} />
        </div>
      </div>
    );
  }
}

export default App;
