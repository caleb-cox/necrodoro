import styled from 'styled-components';

const Message = styled.p`
  margin: 4px 0;
  padding-left: 8px;
  position: relative;

  &::before {
    content: '>';
    position: absolute;
    left: 0px;
  }
`;

export default Message;
