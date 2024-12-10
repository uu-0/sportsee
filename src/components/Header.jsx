import React from 'react';
import {NavLink} from 'react-router-dom';

import LogoSportSee from '../utils/logo.svg'

import styled from 'styled-components';
import colors from '../utils/style/colors';

const NavBar = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 91px;
    background-color: ${colors.black};
  `
  const Logo = styled.img`
    width: 178px;
    height: 60px;
  `


  const StyledNavLink = styled(NavLink)`
    color: ${colors.white};
    font-size: 24px;
    text-decoration: none;
  `

function Header() {
  return (
    <NavBar>
      <Logo src={LogoSportSee} alt='logo SportSee'/>
        <StyledNavLink
          to='/'
        >
          Accueil
        </StyledNavLink>
        <StyledNavLink
          to='/profil'
        >
          Profil
        </StyledNavLink>
        <StyledNavLink
          to='/reglages'
        >
          Réglages
        </StyledNavLink>
        <StyledNavLink
          to='/communaute'
        >
          Communauté
        </StyledNavLink>
    </NavBar>
  );
}

export default Header;
