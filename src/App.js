import React, { Component } from "react"
import "./App.css"

import ChildComponent from "./components/child/index"

class App extends Component {
  render() {
    return (
      <div className="App">
        app
        <ChildComponent />
      </div>
    )
  }
}

export default App
