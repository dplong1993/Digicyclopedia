import React, {useContext} from 'react';
import styled from 'styled-components';
import DigimonContext from '../digimon';
import Card from './Card';

const RowWrapper = styled.div`
  display: flex;
  height: 40%;
  padding-top: 15px;
  padding-bottom: 10px;
`;

function Row(props) {
  const {digimon} = useContext(DigimonContext);

  return (
    <RowWrapper>
      <Card digimon={digimon[props.startVal]}/>
      <Card digimon={digimon[props.startVal + 1]}/>
      <Card digimon={digimon[props.startVal + 2]}/>
      <Card digimon={digimon[props.startVal + 3]}/>
    </RowWrapper>
  )
}

export default Row;
