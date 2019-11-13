import React, { Component } from "react";
import "./App.css";
import NewTask from './components/NewTask'
import List from './components/List'

class App extends Component {
  state = {
    tasks: []
  }
  addTask = (task) => {
    this.setState({
      tasks: [...this.state.tasks, task]
    })
  }
  render() {
    return (
      <div className="App">
        <h1>Sweet App Bro!</h1>
        <NewTask add={this.addTask}/>
        <List tasks={this.state.tasks}/>
      </div>
    );
  }
}

export default App;
