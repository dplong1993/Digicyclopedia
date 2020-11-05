import React from 'react';
import styled from 'styled-components';

const NavBttnWrapper = styled.div`
  .navButton {
    width: 11%;
    margin: 0 0 0 0;
  }
`;

function NavBttn(props) {

  return (
    <>
      <button className="navButton">{props.text}</button>
    </>
  )
}

export default NavBttn;
