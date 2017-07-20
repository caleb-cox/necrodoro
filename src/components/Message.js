import styled from 'styled-components';

const Message = styled.p`
  margin: 4px 0;
  padding-left: 12px;
  position: relative;

  &::before {
    content: '>';
    position: absolute;
    left: 2px;
  }
`;

export default Message;
