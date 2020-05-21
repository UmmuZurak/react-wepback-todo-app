import React from 'react';
import TodoHeader from './todo-header';
import TodoListContainer from './todo-list-container';
import TodoInputContainer from './todo-input-container';

const TodoContainer = () => {
  return (
    <div className="todo-container">
      <TodoHeader />
      <TodoListContainer />
      <TodoInputContainer />
    </div>
  );
};

export default TodoContainer;