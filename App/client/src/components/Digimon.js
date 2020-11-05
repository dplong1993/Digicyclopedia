import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import NavBttn from './NavBttn';
import Row from './Row';
import DigimonContext from '../digimon';

const DigimonWrapper = styled.div`
  width: 75%;
  height: 100vh;
  background-color: #fc6701;
  margin: 10px auto 10px auto;

  .navButtons {
    width: 90%;
    padding-top: 10px;
    margin: 0 auto 0 auto;
    display: flex;
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
  const [currentLevel, setCurrentLevel] = useState('baby');

  const digimonContextValue = {
    levels,
    digimon,
    setDigimon
  }

  const handleClick = (e) => {
    e.preventDefault();
    setCurrentLevel(e.target.innerText.toLowerCase());
  }

  useEffect(() => {
    async function fetchDigimon() {
      const response = await fetch(`/api/digimon/${currentLevel}/`);
      const responseData = await response.json();
      setDigimon(responseData.digimon);
    }

    fetchDigimon();
  }, [currentLevel]);

  if(!digimon){
    return null;
  }

  return (
    <DigimonWrapper>
      <DigimonContext.Provider value={digimonContextValue}>
        <div className="navButtons">
          {levels.map(level => <NavBttn text={level} handleClick={handleClick} currentLevel={currentLevel}/>)}
          <input className="search"/>
          <button className="navButton">Submit</button>
        </div>
        <div className="container">
          <Row startVal={0}/>
          <Row startVal={4}/>
          <div className="pageButtons">
            <button className="pageButton">Back</button>
            <button>Next</button>
          </div>
        </div>
      </DigimonContext.Provider>
    </DigimonWrapper>
  )
}

export default Digimon;
