import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super()

    this.state = {
      measurements: {
        bust: '',
        waist: ''
      }
    }

    // this.handleChange = this.handleChange.bind(this)
    this.customChange = this.customChange.bind(this) 

  }

  // handleChange(value, name) {
  //   this.setState({
  //     measurements: Object.assign({}, this.state.measurements, {name: value})
  //   })
  //   console.log("newState: ", this.state)
  // }

  customChange(name, value) {
    // this.setState({ [name]: value });
    this.setState({
          measurements: Object.assign({}, this.state.measurements, {[name]: value})
        })
    console.log(this.state)
}


  render() {
    console.log(this.state)
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
          <div id='example'></div>
          <select name="bust" onChange={(e) => this.customChange(e.target.name, e.target.value)}>
          <option value="20">20</option>
          <option value="21">21</option>
          <option value="22">22</option>
          <option value="23">23</option>
  </select>
  <select name="waist" onChange={(e) => this.customChange(e.target.name, e.target.value)}>
          <option value="20">20</option>
          <option value="21">21</option>
          <option value="22">22</option>
          <option value="23">23</option>
  </select>
      </div>
    );
  }
}

export default App;
