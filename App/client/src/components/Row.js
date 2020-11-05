import React from 'react';
import styled from 'styled-components';
import Card from './Card';

const RowWrapper = styled.div`
  display: flex;
  height: 40%;
  padding-top: 15px;
  padding-bottom: 10px;
`;

function Row(props) {

  return (
    <RowWrapper>
      <Card />
      <Card />
      <Card />
      <Card />
    </RowWrapper>
  )
}

export default Row;
