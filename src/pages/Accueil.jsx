import React from 'react';

import SideBar from '../components/SideBar/SideBar';
import Welcome from '../components/Welcome';

import styled from 'styled-components';

const Container = styled.div`
  display: flex;
`

const DashBoard = styled.div`
  padding-top: 25px;
  padding-bottom: 25px;
  padding-left: 100px;
  padding-right: 100px;
`

const Congratulation = styled.p`
  font-size: 18px;
  font-weight: 300;
`



function Accueil() {
  return (
    <Container>
      <SideBar/>
      <DashBoard>
        <Welcome />
        <Congratulation>Félicitation ! Vous avez explosé vos objectifs hier 👏</Congratulation>
      </DashBoard>
    </Container>
  );
}

export default Accueil;
