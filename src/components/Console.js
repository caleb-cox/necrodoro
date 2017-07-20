import React from 'react';
import styled from 'styled-components';
import Message from './Message';

const ConsoleWrapper = styled.div`
  height: 71px;
  margin: 4px;
  overflow-y: scroll;
  box-sizing: content-box;

  &::-webkit-scrollbar {
    background-color: black;
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: white;
  }
`;

class Console extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [
        'Propane and propane accessories. Dang it Peggy. Buaaaaaaah. I tell you what. Dang it Bobby. America, hooray, gosh darn it. Lorem ipsum I tell you what. I love Texas. Lol. Jabroni.',
        'Propane and propane accessories. Dang it Peggy. Buaaaaaaah. I tell you what. Dang it Bobby. America, hooray, gosh darn it. Lorem ipsum I tell you what. I love Texas. Lol. Jabroni.',
        'Propane and propane accessories. Dang it Peggy. Buaaaaaaah. I tell you what. Dang it Bobby. America, hooray, gosh darn it. Lorem ipsum I tell you what. I love Texas. Lol. Jabroni.',
        'Propane and propane accessories. Dang it Peggy. Buaaaaaaah. I tell you what. Dang it Bobby. America, hooray, gosh darn it. Lorem ipsum I tell you what. I love Texas. Lol. Jabroni.',
      ],
    };
  }

  componentDidMount() {
    this.scrollToBottom();
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }

  scrollToBottom() {
    this.node.scrollTop = this.node.scrollHeight;
  }

  render() {
    const messages = this.state.messages.map(message => (
      <Message key={Math.random()}>
        {message}
      </Message>
    ));

    return (
      <ConsoleWrapper innerRef={(node) => { this.node = node; }}>
        {messages}
      </ConsoleWrapper>
    );
  }
}

export default Console;
