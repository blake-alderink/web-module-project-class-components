import React from "react";
import "../styles/styles.css";

export default class Todo extends React.Component {
  render() {
    return (
      <p
        className={this.props.todo.completed ? "completed" : "notCompleted"}
        onClick={() => this.props.setCompleted(this.props.todo.id)}
      >
        {this.props.todo.name}
        {this.props.todo.id}
        {this.props.todo.completed ? "hiii" : "noo"}
      </p>
    );
  }
}
