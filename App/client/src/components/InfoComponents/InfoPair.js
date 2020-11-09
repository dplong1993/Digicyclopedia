import React from 'react';
import styled from 'styled-components';

const InfoPairWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  .label{
    background-color: #FFA040;
    box-sizing: border-box;
    width: 30%;
    margin: 2px;
    font-size: 16px;
    font-weight: bold;
    display: flex;
    align-items: center;
  }

  .data{
    width: 70%;
    box-sizing: border-box;
    background-color: #FFE5A5;
    margin: 2px;
    display: flex;
    flex-direction: column;
  }

  a {
    text-decoration: none;
    color: #064b88;
  }
`;

const InfoPair = (props) => {
  const {label, data} = props;

  return (
    <InfoPairWrapper>
      <div className="label">{label}</div>
      <div className="data">{data}</div>
    </InfoPairWrapper>
  )
}

export default InfoPair;
