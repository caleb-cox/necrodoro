import React from 'react';
import styled from 'styled-components';

const Console = () => {
  const Wrapper = styled.div`
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

  const Message = styled.p`
    color: white;
    margin: 4px 0;
    padding-left: 12px;
    font-family: Monaco, Consolas, "Lucida Console", monospace;
    font-size: 10px;
    position: relative;

    &::before {
      content: '>';
      position: absolute;
      left: 0;
    }
  `;

  return (
    <Wrapper>
      <Message>
        Propane and propane accessories. Dang it Peggy.
        Buaaaaaaah. I tell you what. Dang it Bobby.
        America, hooray, gosh darn it. Lorem ipsum I
        tell you what. I love Texas. Lol. Jabroni.
      </Message>
      <Message>
        Propane and propane accessories. Dang it Peggy.
        Buaaaaaaah. I tell you what. Dang it Bobby.
        America, hooray, gosh darn it. Lorem ipsum I
        tell you what. I love Texas. Lol. Jabroni.
      </Message>
      <Message>
        Propane and propane accessories. Dang it Peggy.
        Buaaaaaaah. I tell you what. Dang it Bobby.
        America, hooray, gosh darn it. Lorem ipsum I
        tell you what. I love Texas. Lol. Jabroni.
      </Message>
      <Message>
        Propane and propane accessories. Dang it Peggy.
        Buaaaaaaah. I tell you what. Dang it Bobby.
        America, hooray, gosh darn it. Lorem ipsum I
        tell you what. I love Texas. Lol. Jabroni.
      </Message>
    </Wrapper>
  );
};

export default Console;
