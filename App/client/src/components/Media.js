import React from 'react';
import ListView from './ListView';

function Media(){
  const tabs = [
    'Tv-Show',
    'Movie',
    'Video-Game',
    'CCG'
  ]

  return (
    <ListView type={"media"} tabs={tabs} defaultTab={'tv-show'}/>
  )
}

export default Media;
