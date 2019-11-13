import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    food: ["meat", "cheese", "bread", "eggs", "doritos"],
    input: ""
  };
  handleChange = e => {
    this.setState({
      input: e.target.value
    });
  };
  render() {
    let foods = this.state.food
      .filter(el => el.includes(this.state.input))
      .map(el => <h2>{el}</h2>);
    return (
      <div className="App">
        <input onChange={e => this.handleChange(e)} type="text" />
        {foods}
      </div>
    );
  }
}

export default App;
