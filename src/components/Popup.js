import React from 'react';
import styled from 'styled-components';

class Popup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hey: 'what up',
    };
  }

  render() {
    const Wrapper = styled.div`
      max-width: 50%;
      max-height: 50%;
      overflow: hidden;
      background-color: black;
      padding: 12px;
      border: 1px solid white;
      box-shadow: 0 0 0 2px black;
    `;


    switch (this.props.popupType) {
      case 'bobby': {
        const Lorem = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
        return (
          <Wrapper>
            {Lorem}
          </Wrapper>
        );
      }
      default: {
        return null;
      }
    }
  }
}

export default Popup;
