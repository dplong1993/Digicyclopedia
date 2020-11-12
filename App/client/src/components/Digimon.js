import React from 'react';
import ListView from './ListView';

function Digimon(){
  const levels = [
    "All",
    'Baby',
    'In-Training',
    'Rookie',
    'Champion',
    'Ultimate',
    'Mega'
  ]

  return (
    <ListView type={"digimon"} tabs={levels} defaultTab={'all'}/>
  )
}

export default Digimon;
