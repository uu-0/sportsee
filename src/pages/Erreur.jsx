import React from 'react'

import styled from 'styled-components'
import colors from '../utils/style/colors'

const Container = styled.div`
margin-left: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Erreur = styled.p`
    font-size: 100px;
    font-weight: bold;
    margin-bottom: 10px;
    color: ${colors.red}
`


const Label = styled.p`
    margin-top: 0;
    font-size: 60px;
    color: ${colors.red}
`



function Accueil() {
  return (
    <Container>
      <Erreur>
        Erreur 404  
      </Erreur>
      <Label>
        Cette page n'existe pas
      </Label>
    </Container>
  );
}

export default Accueil;
