import React from 'react';
import ListView from './ListView';

function Media(){
  const tabs = [
    "All",
    'Tv-Show',
    'Movie',
    'Game',
    'CCG'
  ]

  return (
    <ListView type={"media"} tabs={tabs} defaultTab={'all'}/>
  )
}

export default Media;
