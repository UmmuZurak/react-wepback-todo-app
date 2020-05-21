import React from 'react';
import Mode from './mode';
import TodoTime from './todo-time';
import TodoCompletedTasks from './todo-completed-task';

const TodoHeader = () => {
  return (
    <div className="todo-header">
      <div className="todo-header-top">
        <div className="header-title">Title</div>
        <Mode />
      </div>
      <div className="todo-header-bottom">
        <TodoTime />
        <TodoCompletedTasks />
      </div>
    </div>
  );
};

export default TodoHeader;
