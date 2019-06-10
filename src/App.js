import React, { Component } from 'react';
import FunctionalComponent from './components/FunctionalComponent';
import './App.css';

class App extends Component {
  state = {
    val: 1
  };

  componentDidMount() {
    setInterval( () => {
      this.setState({
        val: 1
      })
    }, 3000)
  }

  render() {
    return (
    <div className="App">
      <header className="App-header">
       <FunctionalComponent val={this.state.val} />
      </header>
    </div>
  );
  }
  
}

export default App;
