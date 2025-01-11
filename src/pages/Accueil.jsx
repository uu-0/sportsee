import React from 'react'

import {ResponsiveContainer} from 'recharts'

import Header from '../components/Header'
import SideBar from '../components/SideBar/SideBar'
import Welcome from '../components/Welcome'
import Activity from '../components/Activity'
import AverageSession from '../components/AverageSession'
import RadarChartComponent from '../components/RadarChart'
import RadialBarChart from '../components/RadialBarChart'
import Calories from '../components/Calories'

import styled from 'styled-components'

const Container = styled.div`
  display: flex;
`

const Dashboard = styled.div`
  margin-left: 40px;
`

const Congratulation = styled.p`
  margin-bottom: 40px;
  font-size: 18px;
  font-weight: 300;
`

const Content = styled.div`
  display: flex;
  justify-content: center;
`

const LeftBloc = styled.div`
  display: flex;
  flex-direction: column;
`

const CardContainer = styled.div`
  display: flex;
  margin-top: 50px;
  gap: 50px;  
 `

const RigthBloc = styled.div`
  display: flex;
  flex-direction: column;
`

function Accueil() {
  return (
    <Container>
      <SideBar/>
      <Dashboard>
        <Welcome/>
        <Congratulation>Félicitation ! Vous avez explosé vos objectifs hier 👏</Congratulation>
        <Content>
            <LeftBloc>
                <Activity/> 
                 <CardContainer>
                  <AverageSession/>
                  <RadarChartComponent/>
                  <RadialBarChart/>
                </CardContainer> 
            </LeftBloc>
            <RigthBloc>
                <Calories />
            </RigthBloc>
        </Content>
    </Dashboard>
    </Container>
  );
}

export default Accueil;
