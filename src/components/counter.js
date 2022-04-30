import React, { Component } from 'react'

export default class counter extends Component {

  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
  }

  static getDerivedStateFromProps(props, state) {
    console.log(props.value);
    if (state.count !== props.value) {
      return {
        count: props.value,
      };
    }
    return null;
  }

  render() {
    return (
      <>{this.state.count}</>
    )
  }
}