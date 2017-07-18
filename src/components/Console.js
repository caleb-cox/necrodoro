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
      <Message>Propane and propane accessories. Dang it Peggy. Buaaaaaaah.
        I tell you what. Dang it Bobby. America, hooray, gosh darn it.</Message>
      <Message>Propane and propane accessories. Dang it Peggy. Buaaaaaaah.
        I tell you what. Dang it Bobby. America, hooray, gosh darn it.</Message>
      <Message>Propane and propane accessories. Dang it Peggy. Buaaaaaaah.
        I tell you what. Dang it Bobby. America, hooray, gosh darn it.</Message>
      <Message>Propane and propane accessories. Dang it Peggy. Buaaaaaaah.
        I tell you what. Dang it Bobby. America, hooray, gosh darn it.</Message>
    </Wrapper>
  );
};

export default Console;
