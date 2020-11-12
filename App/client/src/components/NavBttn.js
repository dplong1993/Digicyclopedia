import React from 'react';
import styled from 'styled-components';

const NavBttnWrapper = styled.div`
  width: 10%;

  .activeButton{
    width: 100%;
    margin: 0 0 0 0;
    cursor: pointer;
    background-color: #064b88;
    color: #fc6701;
  }

  .button {
    width: 100%;
    margin: 0 0 0 0;
    cursor: pointer;
    color: #fc6701;
    background-color: #fecc3d;
  }
`;

function NavBttn(props) {

  return (
    <NavBttnWrapper>
      {props.text.toLowerCase() === props.currentTab ?
      <button className="activeButton" onClick={props.handleNavClick}>{props.text}</button>:
      <button className="button" onClick={props.handleNavClick}>{props.text}</button>}
    </NavBttnWrapper>
  )
}

export default NavBttn;
