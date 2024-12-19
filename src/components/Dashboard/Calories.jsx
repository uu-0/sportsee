import React from 'react';

import styled from 'styled-components';
import colors from '../../utils/style/colors';


const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 30px;
  gap: 50px;
  height: 593px;
  width: 258px;
`
const Case = styled.div`
  height: 124px;
  border-radius: 10px;
  background-color: ${colors.gray}
`


function Calories() {
  return (
    <Container>
        <Case>
            Calories
        </Case>
        
        <Case>
            Proteines
        </Case>
        
        <Case>
            Glucides
        </Case>
        
        <Case>
            Lipides
        </Case>
    </Container>
  );
}

export default Calories;