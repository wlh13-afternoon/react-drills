import React from "react";

export default class Todo extends React.Component {
  render() {
    return (
      <div>
        <h2>{this.props.data}</h2>
      </div>
    );
  }
}
