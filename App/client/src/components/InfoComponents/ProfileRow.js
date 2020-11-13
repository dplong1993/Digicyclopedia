import React from 'react';
import styled from 'styled-components';
import ProfileCard from './ProfileCard';

const ProfileRowWrapper = styled.div`
  display: flex;
  height: 40%;
  padding-top: 15px;
  padding-bottom: 10px;
`;

function ProfileRow(props) {
  const {items, startVal, type} = props;

  return (
    <ProfileRowWrapper>
      <ProfileCard type={type} item={items[startVal]}/>
      <ProfileCard type={type} item={items[startVal + 1]}/>
      <ProfileCard type={type} item={items[startVal + 2]}/>
      <ProfileCard type={type} item={items[startVal + 3]}/>
    </ProfileRowWrapper>
  )
}

export default ProfileRow;
