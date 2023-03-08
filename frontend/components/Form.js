import React from "react";
import "../styles/styles.css";

export default class Form extends React.Component {
  render() {
    return (
      <form onSubmit={this.props.createItem}>
        <input
          placeholder="create item"
          onChange={this.props.onChange}
          value={this.props.properties.name}
        />
        <button>create</button>
        <h1>{this.props.properties.name}</h1>
      </form>
    );
  }
}
