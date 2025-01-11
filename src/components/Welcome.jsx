import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import styled from 'styled-components'
import colors from '../utils/style/colors'

import { fetchUserData } from '../utils/API/serviceAPI'


const WelcomeText = styled.p`
  margin-top: 18px;
  margin-bottom: 18px;
  color: ${colors.black};
  font-size: 48px;
  font-weight: 600;
`;

const WelcomeSpan = styled.span`
  color: ${colors.red};
`;



function Welcome() {
  const { userId } = useParams()
  const [userName, setUserName] = useState('')

  useEffect(() => {
    fetchUserData(userId, setUserName)
  }, [userId])

  return (
    <WelcomeText>
      Bonjour <WelcomeSpan>{userName}</WelcomeSpan>
    </WelcomeText>
  )
}

export default Welcome;
