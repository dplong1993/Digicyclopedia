import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router';
import InfoBio from './InfoBio';
import InfoContainer from './InfoContainer';

const DigimonInfoWrapper = styled.div`
  display: flex;
  width: 75%;
  margin: 30px auto 0px auto;
  background-color: white;
  justify-content: space-between;
`;

function DigimonInfo(props) {
  const [digimon, setDigimon] = useState(null);
  let { name } = useParams();

  useEffect(() => {
    async function fetchDigimon() {
      const response = await fetch(`/api/digimon/${name}/`);
      const responseData = await response.json();
      setDigimon(responseData.data[0]);
    }

    fetchDigimon();
  }, [name]);

  if(!digimon){
    return null;
  }

  return (
    <DigimonInfoWrapper>
        <InfoBio item={digimon} />
        <InfoContainer item={digimon} type="digimon" />
    </DigimonInfoWrapper>
  )
}

export default DigimonInfo;
