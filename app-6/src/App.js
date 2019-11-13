import React, { Component } from "react";
import Todo from './components/Todo'
import "./App.css";

class App extends Component {
  state = {
    tasks: [],
    input: ''
  }
  inputChange = e => {
    this.setState({
      input: e.target.value
    })
  }
  addToTasks = () => {
    let newTasks = [...this.state.tasks, this.state.input]
    this.setState({
      tasks: newTasks,
      input: ''
    })
  }
  render() {
    let stuff = this.state.tasks.map(el => <Todo data={el}/>)
    return (
      <div className="App">
        <h1>My Todo List!</h1>
        <input value={this.state.input} onChange={e => this.inputChange(e)} type="text"/>
        <button onClick={() => this.addToTasks()} >Add</button>
        {stuff}
      </div>
    );
  }
}

export default App;
