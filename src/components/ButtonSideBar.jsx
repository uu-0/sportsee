import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';
import colors from '../utils/style/colors';

const StyledLink = styled(Link)`
    width: 64px;
    height: 64px;
    border-radius: 6px;
    background-color: ${colors.white};
    display: flex;
    align-items: center;
    justify-content: center;
`;
const Icon = styled.img`
    width: 50%;
    height: 50%;
    object-fit: contain;
`;

// ButtonSideBar Component
function ButtonSideBar({ linkURL, iconURL }) {
  return (
    <StyledLink
      to={linkURL}
    >
      <Icon src={iconURL} alt="icône" />
    </StyledLink>
  );
}

export default ButtonSideBar;