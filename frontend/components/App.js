import React from "react";
import TodoList from "./TodoList";
import Form from "./Form";
import "../styles/styles.css";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      name: "",
    };
  }

  setCompleted = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }

        return todo;
      }),
    });
  };

  createItem = (event) => {
    event.preventDefault();
    this.setState({
      todos: [
        ...this.state.todos,
        {
          name: this.state.name,
          completed: false,
          id: this.state.todos.length + 1,
        },
      ],
    });
    this.setState({ name: "" });
  };

  onChange = (event) => {
    event.preventDefault();
    this.setState({ name: event.target.value });
  };

  render() {
    return (
      <div>
        <TodoList todos={this.state.todos} setCompleted={this.setCompleted} />
        <Form
          onChange={this.onChange}
          properties={this.state}
          createItem={this.createItem}
        />
      </div>
    );
  }
}
