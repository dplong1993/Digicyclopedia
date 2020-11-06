import React, {useEffect, useState} from 'react';
import ListView from './ListView';
import DigimonContext from '../digimon';

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
    digimon,
    setDigimon
  }

  async function fetchDigimon() {
    const response = await fetch(`/api/digimon/${currentLevel}/`);
    const responseData = await response.json();
    setDigimon(responseData.data);
  }

  useEffect(() => {
    fetchDigimon();
  }, []);

  if(!digimon){
    return null;
  }

  return (
    <DigimonContext.Provider value={digimonContextValue}>
      <ListView type={"digimon"} items={digimon} setItems={setDigimon} currentTab={currentLevel} setCurrentTab={setCurrentLevel} tabs={levels}/>
    </DigimonContext.Provider>
  )
}

export default Digimon;
