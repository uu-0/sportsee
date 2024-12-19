import React from 'react';

import SideBar from '../components/SideBar/SideBar';
import Dashboard from '../components/Dashboard/Dashboard';

import styled from 'styled-components';
import colors from '../utils/style/colors';

const Container = styled.div`
  display: flex;
`

function Accueil() {
  return (
    <Container>
      <SideBar/>
      <Dashboard />
    </Container>
  );
}

export default Accueil;
