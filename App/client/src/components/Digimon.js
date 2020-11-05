import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import NavBttn from './NavBttn';
import Row from './Row';

const DigimonWrapper = styled.div`
  width: 75%;
  height: 100vh;
  background-color: #fc6701;
  margin: 10px auto 10px auto;

  .navButtons {
    width: 90%;
    padding-top: 10px;
    margin: 0 auto 0 auto;
  }

  .navButton {
    width: 11%;
    margin: 0 0 0 0;
  }

  .search {
    width: 18%;
    margin: 0 0 0 55px;
  }

  .container {
    width: 90%;
    height: 85vh;
    background-color: #064b88;
    margin: 0 auto 0 auto;
  }

  .pageButtons {
    display: flex;
    width: 10%;
    margin: 0 auto 0 auto;
    padding-top: 10px;
    justify-content: space-between;
  }
`;

function Digimon(){
  const levels = [
    'Baby',
    'In-Training',
    'Rookie',
    'Champion',
    'Ultimate',
    'Mega'
  ]
  const [digimon, setDigimon] = useState([]);

  useEffect(() => {
    async function fetchDigimon() {
      const response = await fetch('/api/digimon/');
      const responseData = await response.json();
      setDigimon(responseData.digimon);
    }

    fetchDigimon();
  }, []);

  if(!digimon){
    return null;
  }

  console.log(digimon);

  return (
    <DigimonWrapper>
      <div className="navButtons">
        {levels.map(level => <NavBttn text={level}/>)}
        <input className="search"/>
        <button className="navButton">Submit</button>
      </div>
      <div className="container">
        <Row />
        <Row />
        <div className="pageButtons">
          <button className="pageButton">Back</button>
          <button>Next</button>
        </div>
      </div>
    </DigimonWrapper>
  )
}

export default Digimon;
