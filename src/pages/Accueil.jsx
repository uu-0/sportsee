import React from 'react';

import SideBar from '../components/SideBar';

import styled from 'styled-components';
import colors from '../utils/style/colors';

const AccueilContainer = styled.div`
  display: flex;
`


function Accueil() {
  return (
    <AccueilContainer>
      <SideBar/>
      <p>axccueil</p>
    </AccueilContainer>
  );
}

export default Accueil;
