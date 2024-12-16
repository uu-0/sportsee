import React from 'react';

import LogoSportSee from '../utils/logo.svg'

import styled from 'styled-components';
import colors from '../utils/style/colors';

const NavBar = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 91px;
    background-color: ${colors.black};
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  `
  const Logo = styled.img`
    width: 178px;
    height: 60px;
    margin-left: -40px;
  `


  const FakeLink = styled.p`
    color: ${colors.white};
    font-size: 24px;
    cursor: pointer;
  `

function Header() {
  return (
    <NavBar>
      <Logo src={LogoSportSee} alt='logo SportSee'/>
      <FakeLink>
        Accueil
      </FakeLink>
      <FakeLink>
        Profil
      </FakeLink>
      <FakeLink>
        Réglages
      </FakeLink>
      <FakeLink>
        Communauté
      </FakeLink>
    </NavBar>
  );
}

export default Header;
