import React from 'react';

import Welcome from './Welcome';
import BarChartActivity from './BarChartActivity.jsx';
import BottomLeftBloc from './BottomLeftBloc';
import Calories from './Calories';

import styled from 'styled-components';

import { mockUserActivity } from "../../utils/API/mockAPI.js";


const Congratulation = styled.p`
  margin-bottom: 40px;
  font-size: 18px;
  font-weight: 300;
`

const Container = styled.div`
  width: 100%;
  padding-top: 25px;
  padding-bottom: 25px;
  padding-left: 100px;
  padding-right: 150px;
`

const Content = styled.div`
  display: flex;
  justify-content: center;
`

const LeftBloc = styled.div`
  display: flex;
  flex-direction: column;
`

const RigthBloc = styled.div`
  display: flex;
  flex-direction: column;
`


function Dashboard() {
  return (
    <Container>
        <Welcome />
        <Congratulation>Félicitation ! Vous avez explosé vos objectifs hier 👏</Congratulation>
        <Content>
            <LeftBloc>
                <BarChartActivity />
                <BottomLeftBloc />
            </LeftBloc>
            <RigthBloc>
                <Calories />
            </RigthBloc>
        </Content>
    </Container>
  );
}

export default Dashboard;