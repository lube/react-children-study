import React from 'react';

export default class DraggableProvider extends React.Component {
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