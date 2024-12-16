import React, { useEffect, useState } from 'react';

import SideBar from '../components/SideBar/SideBar';

import styled from 'styled-components';
import colors from '../utils/style/colors';

const AccueilContainer = styled.div`
  display: flex;
`

const DashBoard = styled.div`
  padding-top: 25px;
  padding-bottom: 25px;
  padding-left: 100px;
  padding-right: 100px;
`

const WelcomeText = styled.p`
  color: ${colors.black};
  font-size: 48px;
  font-weight: 600;
`

const WelcomeSpan = styled.span`
  color: ${colors.red}
`



function Accueil() {
  //état pour stocker le nom de l'user
  const [userName, setUserName] = useState('');

  //simulation récupération de données utilisateur
  useEffect(() => {
    //données mockées
    const mockUser = { firstName: 'Jane', lastName: 'Doe' };
    //mise à jour de l'état avec le prénom
    setUserName(mockUser.firstName); 
  }, []); //exécuté une seule fois après le montage du composant

  return (
    <AccueilContainer>
      <SideBar/>
      <DashBoard>
        <WelcomeText>Bonjour <WelcomeSpan>{userName}</WelcomeSpan></WelcomeText>
      </DashBoard>
    </AccueilContainer>
  );
}

export default Accueil;
