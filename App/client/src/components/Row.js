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
  const {items, startVal, type, favItems, setFavItems} = props;

  return (
    <RowWrapper>
      <Card type={type} favItems={favItems} setFavItems={setFavItems} item={items[startVal]}/>
      <Card type={type} favItems={favItems} setFavItems={setFavItems} item={items[startVal + 1]}/>
      <Card type={type} favItems={favItems} setFavItems={setFavItems} item={items[startVal + 2]}/>
      <Card type={type} favItems={favItems} setFavItems={setFavItems} item={items[startVal + 3]}/>
    </RowWrapper>
  )
}

export default Row;
