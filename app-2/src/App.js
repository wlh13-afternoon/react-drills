import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    array: ['shoes', 'hats', 'coats', 'skis', 'watercraft']
  }
  render() {
    let stuff = this.state.array.map(el => (
      <h2>{el}</h2>
    ))
    return (
      <div className="App">
        {stuff}
      </div>
    );
  }
}

export default App;
