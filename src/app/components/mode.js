import React, { Component } from 'react';

class Mode extends Component {
  handleChange(e) {
    if (e.target.checked) {
      document.documentElement.setAttribute('data-theme', 'light');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
  }

  render() {
    return (
      <div className="toggle">
        <input type="checkbox" onInput={this.handleChange} id="toggle" />
        <label htmlFor="toggle"></label>
      </div>
    );
  }
}

export default Mode;
