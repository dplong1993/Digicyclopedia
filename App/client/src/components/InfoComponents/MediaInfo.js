import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router';
import InfoBio from './InfoBio';
import InfoContainer from './InfoContainer';

const MediaInfoWrapper = styled.div`
  display: flex;
  width: 75%;
  margin: 30px auto 0px auto;
  background-color: white;
  justify-content: space-between;
`;

function MediaInfo(props) {
  const [media, setMedia] = useState(null);
  let { name } = useParams();
  console.log(name);

  useEffect(() => {
    async function fetchMedia() {
      const response = await fetch(`/api/media/${name}/`);
      const responseData = await response.json();
      setMedia(responseData.data[0]);
    }

    fetchMedia();
  }, [name]);

  if(!media){
    return null;
  }

  return (
    <MediaInfoWrapper>
        <InfoBio item={media} />
        <InfoContainer item={media} type="media" />
    </MediaInfoWrapper>
  )
}

export default MediaInfo;
