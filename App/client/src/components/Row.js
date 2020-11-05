import React from 'react';
import styled from 'styled-components';
import Card from './Card';

const RowWrapper = styled.div`
  .row {
    display: flex;
    height: 40%;
    padding-top: 15px;
    padding-bottom: 10px;
  }
`;

function Row(props) {

  return (
    <RowWrapper>
      <div className="row">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </RowWrapper>
  )
}

export default Row;
