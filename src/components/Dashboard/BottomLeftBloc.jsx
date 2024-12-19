import React from 'react';

import styled from 'styled-components';
import colors from '../../utils/style/colors';


const Container = styled.div`
  margin-top: 30px;
  display: flex;
  gap: 50px;
`
const Duration = styled.div`
  width: 258px;
  height: 263px;
  border-radius: 15px;
  background-color: ${colors.red}
`

const Intensity = styled.div`
  width: 258px;
  height: 263px;
  border-radius: 15px;
  background-color: ${colors.darkGray}
`

const Score = styled.div`
  width: 258px;
  height: 263px;
  border-radius: 15px;
  background-color: ${colors.gray}
`


function BottomLeftBloc() {
  return (
    <Container>
        <Duration>durée de la session</Duration>
        <Intensity>Intensité</Intensity>
        <Score>Score</Score>
    </Container>
  );
}

export default BottomLeftBloc;