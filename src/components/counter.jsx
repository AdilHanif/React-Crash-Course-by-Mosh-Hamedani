/** @format */

import React, { Component } from "react";

class valueer extends Component {
  state = {
    value: this.props.value,
  };

  handleIncrement = (productId) => {
    console.log("productId", productId);
    this.setState({ value: this.state.value + 1 });
  };

  render() {
    return (
      <div>
        {this.props.children}
        <span className={this.getBadgeClasses()}>{this.formatValue()}</span>
        <button
          onClick={() => this.handleIncrement(1)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.value == 0 ? "warning" : "primary";
    return classes;
  }

  formatValue() {
    const { value } = this.state;
    return value == 0 ? "zero" : value;
  }
}

export default valueer;
