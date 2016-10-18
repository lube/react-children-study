import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const Draggable = ({x, y, color}) => (
  <span style={{position: 'absolute', left:x, top: y, backgroundColor: color}}> ALO! </span>
)

class DraggableProvider extends React.Component {
  constructor() {
    super()
    this.state = { x: 0, y: 0 }
    this.handleMouseOver = this.handleMouseOver.bind(this)
  }

  handleMouseOver(e) {
    this.setState({x: e.nativeEvent.clientX, y: e.nativeEvent.clientY})
  }

  render() {
    return (
      <div className="App-header" onMouseMove={this.handleMouseOver}>
        {this.props.children(this.state.x, this.state.y)}
      </div>
    )
  }
}

const ConnectedDraggable = MousePosProviderWrapper(Draggable)

function MousePosProviderWrapper(WrappedComponent) {
  return class MousePosProvider extends React.Component {
    constructor() {
      super()
      this.state = { x: 0, y: 0 }
      this.handleMouseOver = this.handleMouseOver.bind(this)
    }

    handleMouseOver(e) {
      this.setState({x: e.nativeEvent.clientX, y: e.nativeEvent.clientY})
    }

    render() {
      return (
        <div  className="App-header"  onMouseMove={this.handleMouseOver}>
          <WrappedComponent x={this.state.x} y={this.state.y} color={this.props.color}/>
        </div>
      )
    }
  }
}


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
          <ConnectedDraggable color='red' />
          <hr/>
          <DraggableProvider>
            {(x,y) => <Draggable color='blue' {...{x,y}}> ALO! </Draggable>}
          </DraggableProvider>
        </div>
      </div>
    );
  }
}


export default App;
