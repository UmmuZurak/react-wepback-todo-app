import React, { Component } from 'react';

class TodoInput extends Component {
  state = {
    content: '',
  };

  handleChange = (e) => {
    this.setState({
      content: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="todo-input">
        <input
          type="text"
          onChange={this.handleChange}
          className="input"
          placeholder="Add task"
        />
        <a className="input-btn">
          <i className="fas fa-plus"></i>
        </a>
      </form>
    );
  }
}

export default TodoInput;
