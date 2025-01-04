import React from 'react'

import styled from 'styled-components'
import colors from '../../utils/style/colors'

const Button = styled.div`
    width: 64px;
    height: 64px;
    border-radius: 6px;
    background-color: ${colors.white};
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    margin-left: 10px;
    margin-right: 10px;
`;
const Icon = styled.img`
    width: 50%;
    height: 50%;
    object-fit: contain;
`;

function ButtonSideBar({ iconURL }) {
  return (
    <Button>
      <Icon src={iconURL} alt="icône" />
    </Button>
  );
}

export default ButtonSideBar