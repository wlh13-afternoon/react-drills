import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    username: '',
    password: ''
  }
  handleChange = e => {
    this.setState({
      [e.target.placeholder]: e.target.value
    })
  }
  alertStuff = () => {
    alert(`Username: ${this.state.username}, Password: ${this.state.password}`)
  }
  render() {
    // console.log(this.state.username, this.state.password)
    return (
      <div className="App">
        <input onChange={e => this.handleChange(e)} placeholder='username' type="text" value={this.state.username}/>
        <input onChange={e => this.handleChange(e)} placeholder='password' type="password" value={this.state.password}/>
        <button onClick={() => this.alertStuff()}>Submit</button>
      </div>
    );
  }
}

export default App;
