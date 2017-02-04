import React, { Component } from 'react'
import Sidebar from './Sidebar'

export default class App extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div>
        <Sidebar />
        {this.props.children}
      </div>
    )
  }
}
