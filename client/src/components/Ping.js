/*jshint esversion: 6 */
import React, { Component } from 'react';

class Ping extends Component {

  render() {
    return (
      <div>
        <h1>Pong</h1>
        <pre>state = {JSON.stringify(this.state, undefined, '  ')}</pre>
      </div>
    );
  }

  componentDidMount() {
    fetch('/ping').then((res) => {
      return res.json();
    }).then((res) => {
      this.setState({res});
    }).catch((err) => {
      this.setState({err});
    });
  }
}

export default Ping;
