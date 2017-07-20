import React from 'react';
import styled from 'styled-components';

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
    const Wrapper = styled.div`
      height: 72px;
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

    const Message = styled.p`
      margin: 4px 0;
      padding-left: 12px;
      position: relative;

      &::before {
        content: '>';
        position: absolute;
        left: 0;
      }
    `;

    const messages = this.state.messages.map(message => (
      <Message key={Math.random()}>
        {message}
      </Message>
    ));

    return (
      <Wrapper innerRef={(node) => { this.node = node; }}>
        {messages}
      </Wrapper>
    );
  }
}

export default Console;
