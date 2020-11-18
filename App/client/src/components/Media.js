import React, {useState, useEffect, useContext} from 'react';
import ListView from './ListView';
import AuthContext from '../auth';

function Media(){
  const {currentUserId} = useContext(AuthContext);
  const [favMedia, setFavMedia] = useState(null);

  useEffect(() => {
    async function fetchData() {
        const response = await fetch(`/api/users/${currentUserId}/fav_media`);
        const responseData = await response.json();
        setFavMedia(responseData.data);
    }
    fetchData();
  }, [currentUserId]);

  const tabs = [
    "All",
    'Tv-Show',
    'Movie',
    'Game',
    'CCG'
  ]

  return (
    <ListView type={"media"} favItems={favMedia} setFavItems={setFavMedia} tabs={tabs} defaultTab={'all'}/>
  )
}

export default Media;
