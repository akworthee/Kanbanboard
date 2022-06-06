import React, { Component} from "react"
import Graph from "./Components/Graph/index.jsx"
import DragDrop from "./Components/DragDrop/index.jsx"
import "./App.scss"

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      caption: "Arun"
    }
  }
  render(){
  return (
    <div className="container" style={{"height": "500vh"}}>
    <header>
      <h1> Story Book</h1>
    </header>
    <main>
    <DragDrop />
      <Graph/>
    </main>
    </div>
  )
  }
}


export default App;