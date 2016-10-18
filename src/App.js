import React, { Component } from 'react';
import logo from './logo.svg';
import DraggableProvider from './DraggableProvider';
import Draggable from './Draggable';
import './App.css';

const UnComponente = () => (
  <div> ALO! </div>
)

const SpanArrastrable = Draggable(UnComponente)

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
          <SpanArrastrable color='red'/>
          <hr/>
          <DraggableProvider>
            {(x,y) => <span style={{position: 'absolute', left:x, top:y, backgroundColor: 'blue'}}><UnComponente/></span>}
          </DraggableProvider>
        </div>
      </div>
    );
  }
}


export default App;
