import React, { Component } from 'react'
import Stylesheet from './components/stylesheet'

class App extends Component {
  render() {
    return (
      <div classname="App">
        <Stylesheet />
        <h1>Hello People</h1>
        <input type="text" />
      </div>
    );
  }
}

export default App