import React from 'react';

export default function _draggable(WrappedComponent) {
  return class Draggable extends React.Component 
  {
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
        <div className="App-header"  onMouseMove={this.handleMouseOver}>
          <span style={{position: 'absolute', left:this.state.x, top: this.state.y, backgroundColor: this.props.color}} >
            <WrappedComponent/>
          </span>
        </div>
      )
    }
  }
}