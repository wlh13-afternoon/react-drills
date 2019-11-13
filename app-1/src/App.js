import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    input: ''
  }
  handleChange = (e) => {
    this.setState({
      input: e.target.value
    })
  }
  render() {
    return (
      <div className="App">
        <input onChange={e => this.handleChange(e)}type="text"/>
        <h2>{this.state.input}</h2>
      </div>
    );
  }
}

export default App;
