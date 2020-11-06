import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router';


const DigimonInfoWrapper = styled.div`
`;

function DigimonInfo(props) {
  const [digimon, setDigimon] = useState(null);
  let { name } = useParams();

  useEffect(() => {
    async function fetchDigimon() {
      const response = await fetch(`/api/digimon/${name}/`);
      const responseData = await response.json();
      setDigimon(responseData.digimon);
    }

    fetchDigimon();
  }, [name]);

  if(!digimon){
    return null;
  }

  return (
    <DigimonInfoWrapper>
      <h1>{name}</h1>
    </DigimonInfoWrapper>
  )
}

export default DigimonInfo;
