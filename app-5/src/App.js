import React, { Component } from "react";
import "./App.css";
import Image from './components/Image'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Image image={`https://http.cat/409`}/>
      </div>
    );
  }
}

export default App;
