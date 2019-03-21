import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    value: 0
  }

  handleChangeMinus = () => {
    this.setState({
      value: this.state.value -1
    })
  }

  handleChangePlus = () => {
    this.setState({
      value: this.state.value +1
    })
  }

  render() {

    return (
      <div className="App">
        <button type="button" onClick={this.handleChangeMinus}>빼기</button>
        <input type="text" value={this.state.value} />
        <button type="button" onClick={this.handleChangePlus}>더하기</button>
      </div>
    );
  }
}

export default App;
