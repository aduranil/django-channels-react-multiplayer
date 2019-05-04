import React from 'react';
import WebSocketInstance from './websocket';

class Chat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.waitForSocketConnection();

    this.waitForSocketConnection(() => {
      WebSocketInstance.addCallbacks(this.setMessages.bind(this), this.addMessage.bind(this));
      WebSocketInstance.fetchMessages(this.props.currentUser);
    });
  }

  addMessage = (message) => {
    this.setState({ messages: [...this.state.messages, message] });
  };

  setMessages = (messages) => {
    this.setState({ messages: messages.reverse() });
  };

  waitForSocketConnection(callback) {
    const component = this;
    setTimeout(() => {
      if (WebSocketInstance.state() === 1) {
        console.log('Connection is made');
        callback();
      } else {
        console.log('wait for connection...');
        component.waitForSocketConnection(callback);
      }
    }, 100);
  }

  renderMessages = (messages) => {
    const currentUser = 'admin';
    return messages.map((message, i) => (
      <li key={message.id} className={message.author === currentUser ? 'sent' : 'replies'}>
        <img alt="" src="http://emilcarlsson.se/assets/mikeross.png" />
        <p>
          {message.content}
          <br />
          <small className={message.author === currentUser ? 'sent' : 'replies'}>
            {Math.round((new Date().getTime() - new Date(message.timestamp).getTime()) / 60000)}
            {' '}
            minutes ago
          </small>
        </p>
      </li>
    ));
  };

  render() {
    return <div />;
  }
}
