/*jshint esversion: 6 */
import React, { Component } from 'react';

class Chat extends Component {

  render() {
    return (
      <div>
        <h1>Chat</h1>
        <pre>state = {JSON.stringify(this.state, undefined, '  ')}</pre>
      </div>
    );
  }

  componentDidMount() {
    fetch('/chats').then((res) => {
      return res.json();
    }).then((res) => {
      this.setState({res});
    }).catch((err) => {
      this.setState({err});
    });
  }
}

export default Chat;
