import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddTodo extends Component {
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
    this.props.addTodo(this.state);
    this.setState({
      content: '',
    });
  };

  render() {
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Add Task"
          className="input"
          onChange={this.handleChange}
          value={this.state.content}
        />
        <i className="fas fa-plus"></i>
      </form>
    );
  }
}

AddTodo.propTypes = {
  addTodo: PropTypes.func,
};

export default AddTodo;
