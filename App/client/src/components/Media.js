import React from 'react';
import ListView from './ListView';

function Media(){
  const tabs = [
    'Tv-Shows',
    'Movies',
    'Video-Games',
    'CCGs'
  ]

  return (
    <ListView type={"media"} tabs={tabs} defaultTab={'tv-shows'}/>
  )
}

export default Media;
