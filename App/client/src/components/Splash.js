import React, {useContext} from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import AuthContext from '../auth';

const SplashWrapper = styled.div `
  width: 75%;
  height: 80vh;
  background-color: #fc6701;
  margin: 50px auto;
  display: flex;
  flex-direction: column;

  .info {
    width: 60%;
    height: 40%;
    margin: auto;
    margin-top: 20px;
    font-size: 25px;
    font-family: 'Architects Daughter', cursive;
    color: #064b88;
  }

  .buttons {
    width: 40%;
    display: flex;
    justify-content: center;
    margin: auto;
    height: 10%;
  }

  .image {
    width: 60%;
    height: 40%;
    margin: auto;
  }

  .button {
    border-radius: 10px;
    width: 60px;
    height: 30px;
    background-color: #fecc3d;
    color: #064b88;
    cursor: pointer;
  }

  .spacer {
    width: 40%;
  }
`


function Splash(){
  let history = useHistory();
  const {currentUserId} = useContext(AuthContext);

  return (
    <SplashWrapper>
      <div className="info">
        <p>This is Digicyclopedia a site where you can look up different digimon or digimon media to learn more about them and like your favorite digimon or digimon media so they will show up on your profile. </p>
      </div>
      {currentUserId ? <div /> :
      <div className="buttons">
        <button className="button" onClick={() => history.push('/login')}>Login</button>
        <div className="spacer" />
        <button className="button" onClick={() => history.push('/signup')}>Signup</button>
      </div>
      }
      <img className="image" src="https://digicyclopedia.s3.us-east-2.amazonaws.com/DigimonLogo.png" alt="Digimon Logo" />
    </SplashWrapper>
  )
}

export default Splash;
