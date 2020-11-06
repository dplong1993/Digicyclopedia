import React from 'react';
import ListView from './ListView';

function Digimon(){
  const levels = [
    'Baby',
    'In-Training',
    'Rookie',
    'Champion',
    'Ultimate',
    'Mega'
  ]

  return (
    <ListView type={"digimon"} tabs={levels} defaultTab={'baby'}/>
  )
}

export default Digimon;
