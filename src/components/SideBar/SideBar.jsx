import React from 'react'

import ButtonSideBar from './ButtonSideBar.jsx'

import styled from 'styled-components'
import colors from '../../utils/style/colors'

const SideBarContainer = styled.div`
    width: 125px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    background-color: ${colors.black};
    z-index: 2;
`

const Copyright = styled.p`
    position: absolute;
    bottom: 20px;
    width: 140px;
    color: ${colors.white};
    font-size: 12px;
    transform: rotate(-90deg);
`

function SideBar() {

  return (
    <SideBarContainer>
        <ButtonSideBar
          iconURL='/icons/meditation.svg'
        />
        <ButtonSideBar
          iconURL='/icons/natation.svg'
        />
        <ButtonSideBar 
          iconURL='/icons/velo.svg'
        />
        <ButtonSideBar 
          iconURL="/icons/poids.svg" 
        />
        <Copyright>Copyright, SportSee 2024</Copyright>
    </SideBarContainer>
  )
}

export default SideBar
