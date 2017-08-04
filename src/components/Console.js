import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
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
    const messages = this.props.messages.map(message => (
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

function mapStateToProps(state) {
  return {
    messages: state.console.messages,
  };
}

export default connect(mapStateToProps)(Console);
