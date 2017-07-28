import React from 'react';
import styled from 'styled-components';

const PopupButtonWrapper = styled.button`
  width: 100%;
  margin: 4px;
  padding: 8px;
  border: 1px solid white;
  font-family: 'Nova Mono', monospace;
  line-height: 1em;
  text-transform: uppercase;
  outline: none;

  &:hover,
  &:focus {
    background-color: white;
    color: black;
  }

  &:active {
    border-color: black;
  }
`;

const PopupButton = (props) => {
  const handleClick = (e) => {
    e.preventDefault();
    props.onClick('hey');
  };

  return (
    <PopupButtonWrapper onClick={handleClick}>
      {props.text}
    </PopupButtonWrapper>
  );
};

export default PopupButton;
