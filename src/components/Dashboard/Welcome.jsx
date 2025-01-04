import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import styled from 'styled-components'
import colors from '../../utils/style/colors'

import { mockUserData } from '../../utils/API/mockAPI'
import { fetchUserData } from '../../utils/API/serviceAPI'

const WelcomeText = styled.p`
  margin-top: 18px;
  margin-bottom: 18px;
  color: ${colors.black};
  font-size: 48px;
  font-weight: 600;
`

const WelcomeSpan = styled.span`
  color: ${colors.red};
`

function Welcome({ useMockData }) {
  const { userId } = useParams()
  const [userName, setUserName] = useState('')

  useEffect(() => {
    if (useMockData) {
      //utilisation des données mockées
      const user = mockUserData[userId];
      if (user) {
        setUserName(user.userInfos.firstName);
      } else {
        console.error('Utilisateur non trouvé');
      }
    } else {
      //version finale avec les données de l'API
      fetchUserData(userId)
        .then(data => setUserName(data.userInfos.firstName))
        .catch(error => console.error('Erreur lors de la récupération des données:', error))
     }
  }, [userId, useMockData]); //useEffect déclenché chaque fois que userId ou useMockData change

  return (
    <WelcomeText>
      Bonjour <WelcomeSpan>{userName}</WelcomeSpan>
    </WelcomeText>
  );
}

export default Welcome;
