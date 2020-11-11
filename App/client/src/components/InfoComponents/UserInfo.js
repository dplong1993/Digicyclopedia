import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router';
import ListView from '../ListView';

function UserInfo(props) {
  const levels = [
    'Baby',
    'In-Training',
    'Rookie',
    'Champion',
    'Ultimate',
    'Mega'
  ]

  return (
    <>
      <div>
        <div>
          <img></img>
        </div>
      </div>
    </>
  )
}

export default UserInfo;
