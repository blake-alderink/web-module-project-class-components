import React from "react";
import Todo from "./Todo";
import "../styles/styles.css";

export default class TodoList extends React.Component {
  render() {
    return (
      <div>
        {this.props.todos.map((todo) => {
          return <Todo todo={todo} setCompleted={this.props.setCompleted} />;
        })}
      </div>
    );
  }
}
