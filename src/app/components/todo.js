import React from 'react';
import PropTypes from 'prop-types';

const Todos = ({ todos, deleteTodo, tickTodo }) => {
  const todoList = todos.length ? (
    todos.map((todo) => {
      return (
        <div className="todo-item" key={todo.id}>
          <i
            id={todo.id}
            className="far fa-circle tick"
            onClick={() => {
              tickTodo(todo.id);
            }}
          ></i>
          <span>{todo.content}</span>
          <i
            onClick={() => {
              deleteTodo(todo.id);
            }}
            className="far fa-trash-alt"
          ></i>
        </div>
      );
    })
  ) : (
    <p className="no-todos">Hurray no todos left 🥳</p>
  );

  return <div className="todoList">{todoList}</div>;
};

Todos.propTypes = {
  todos: PropTypes.array,
  deleteTodo: PropTypes.func,
  tickTodo: PropTypes.func,
};

export default Todos;
