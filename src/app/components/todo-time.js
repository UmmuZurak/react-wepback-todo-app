import React, { Component } from 'react';

class TodoTime extends Component {
  render() {
    function setDate() {
      let options = { weekday: 'short', month: 'short', day: 'numeric' };
      let today = new Date();
      return { __html: today.toLocaleDateString('en-US', options) };
    }

    return (
      <div className="todo-time" dangerouslySetInnerHTML={setDate()}></div>
    );
  }
}

export default TodoTime;
