import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import AuthContext from '../auth';
import styled from 'styled-components';

const NavbarWrapper = styled.div`
  display: flex;
  width: 75%;
  height: 40px;
  text-align: center;
  margin: 0 auto 0 auto;

  .logo {
    width: 36%;
    background-color: #fc6701;
    text-align: center;
    font-weight: bold;
    border: 2px solid #fecc3d;
    line-height: 40px;
    color: #064b88;
    font-size: 20px;
    font-family: 'Henny Penny';
    cursor: pointer;
  }

  .button {
    width: 16%;
    background-color: #fc6701;
    border: 2px solid #fecc3d;
    line-height: 40px;
    font-size: 20px;
    font-family: 'Henny Penny';
    color: #064b88;
    cursor: pointer;
  }
`;

function Navbar(){
  const { fetchWithCSRF, setCurrentUserId } = useContext(AuthContext);
  let history = useHistory();

  const logoutUser = async ()=> {
    const response = await fetchWithCSRF('/logout', {
        method: 'POST',
        credentials: 'include'
    });
    if(response.ok){
        setCurrentUserId(null);
        history.push('/login');
    }
  }

  const handleClick = (e) => {
    e.preventDefault();
    history.push(`/${e.target.innerHTML.toLowerCase()}`)
  }

  return (
    <NavbarWrapper>
      <div className="logo">Digicyclopedia</div>
      <button onClick={handleClick} className="button">Digimon</button>
      <button onClick={handleClick} className="button">Media</button>
      <button onClick={handleClick} className="button">Profile</button>
      <button onClick={logoutUser} className="button">Logout</button>
    </NavbarWrapper>
  )
}

export default Navbar;
