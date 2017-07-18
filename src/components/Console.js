import React from 'react';
import styled from 'styled-components';

const Console = () => {
  const Wrapper = styled.div`
    height: 25%;
    width: 100%;
    border-top: 1px dotted white;
    overflow-y: scroll;
    position: absolute;
    bottom: 0;
  `;

  const Message = styled.p`
    color: white;
    margin: 0.5em;
    font-family: Monaco, Consolas, "Lucida Console", monospace;
    font-size: 10px;
    padding-left: 10px;
    position: relative;

    &::before {
      content: '> ';
      position: absolute;
      left: 0;
    }
  `;

  return (
    <Wrapper>
      <Message>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dang it Bobby.</Message>
      <Message>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dang it Bobby.</Message>
      <Message>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dang it Bobby.</Message>
      <Message>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dang it Bobby.</Message>
    </Wrapper>
  );
};

export default Console;
