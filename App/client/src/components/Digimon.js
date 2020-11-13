// eslint-disable-next-line
import React, {useState, useEffect, useContext} from 'react';
import ListView from './ListView';
// eslint-disable-next-line
import AuthContext from '../auth';

function Digimon(){
  const {currentUserId} = useContext(AuthContext);
  const [favDigimon, setFavDigimon] = useState(null);

  useEffect(() => {
    async function fetchData() {
        const response = await fetch(`/api/users/${currentUserId}/fav_digimon`);
        const responseData = await response.json();
        setFavDigimon(responseData.data);
    }
    fetchData();
  }, [currentUserId]);

  const levels = [
    "All",
    'Baby',
    'In-Training',
    'Rookie',
    'Champion',
    'Ultimate',
    'Mega'
  ]

  if(!favDigimon){
    return null;
  }

  return (
    <ListView type={"digimon"} favItems={favDigimon} setFavItems={setFavDigimon} tabs={levels} defaultTab={'all'}/>
  )
}

export default Digimon;
