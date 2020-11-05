import React from 'react';
import styled from 'styled-components';

const NavBttnWrapper = styled.div`
  width: 11%;

  .button {
    width: 100%;
    margin: 0 0 0 0;
  }
`;

function NavBttn(props) {

  return (
    <NavBttnWrapper>
      <button className="button">{props.text}</button>
    </NavBttnWrapper>
  )
}

export default NavBttn;
