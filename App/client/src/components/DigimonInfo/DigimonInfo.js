import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router';


const DigimonInfoWrapper = styled.div`

  .main {
    display: flex;
    width: 75%;
    margin: 30px auto 0px auto;
    background-color: white;
    justify-content: space-between;
  }

  .bioContainer{
    width: 60%;
  }

  .bioHeader {
    margin: 0;
    margin-right: -40px;
    border-bottom: 1px solid black;
    text-align: center;
    font-size: 26px;
    font-weight: bold;
  }

  .bio {
    padding-left: 20px;
    font-family: Arial, sans-serif;
    font-size: 17px;
  }

  .info{
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    margin-right: 20px;
    height: 80%;
    font-family: Arial, sans-serif;
  }

  .name{
    background-color: #FFA040;
    text-align: center;
    font-size: 25px;
    font-weight: bold;
  }

  .img{
    width: 100%;
    height: 50%;
  }

  .infoPair{
    display: flex;
    justify-content: space-between;
  }

  .label{
    background-color: #FFA040;
    box-sizing: border-box;
    width: 30%;
    margin: 2px;
    font-size: 16px;
    font-weight: bold;
    display: flex;
    align-items: center;
  }

  .data{
    width: 70%;
    box-sizing: border-box;
    background-color: #FFE5A5;
    margin: 2px;
    display: flex;
    flex-direction: column;
  }

  a {
    text-decoration: none;
    color: #064b88;
  }
`;

function DigimonInfo(props) {
  const [digimon, setDigimon] = useState(null);
  let { name } = useParams();

  useEffect(() => {
    async function fetchDigimon() {
      const response = await fetch(`/api/digimon/${name}/`);
      const responseData = await response.json();
      setDigimon(responseData.digimon[0]);
    }

    fetchDigimon();
  }, [name]);

  if(!digimon){
    return null;
  }

  return (
    <DigimonInfoWrapper>
      <div className='main'>
        <div className="bioContainer">
          <div className="bioHeader">About {digimon.name}</div>
          <p className="bio">{digimon.bio}</p>
        </div>
        <div className="info">
          <div className="name">{digimon.name}</div>
          <img className="img" src={digimon.photo_url} alt={digimon.name} />
          <div className="infoPair">
            <div className="label">Level</div>
            <div className="data">{digimon.level}</div>
          </div>
          <div className="infoPair">
            <div className="label">Previous Forms</div>
            <div className="data">
              {digimon.previous_form ?
              digimon.previous_form.map((prev, idx) => <a key={idx} href={`/digimon/${prev}`}>{prev}</a>)
              : null}
            </div>
          </div>
          <div className="infoPair">
            <div className="label">Next Forms</div>
            <div className="data">
              {digimon.next_form ?
              digimon.next_form.map((next, idx) => <a key={idx} href={`/digimon/${next}`}>{next}</a>)
              : null}
            </div>
          </div>
        </div>
      </div>
    </DigimonInfoWrapper>
  )
}

export default DigimonInfo;
