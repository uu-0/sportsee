import React from 'react'

import Welcome from './Welcome'
import Activity from './Activity.jsx'

import AverageSession from './AverageSession.jsx'
import RadarChartComponent from './RadarChart.jsx'
import RadialBarChart from './RadialBarChart.jsx'

import Calories from './Calories';

import styled from 'styled-components';


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

const CardContainer = styled.div`
  display: flex;
  margin-top: 50px;
  gap: 50px;
 `

const RigthBloc = styled.div`
  display: flex;
  flex-direction: column;
`


function Dashboard() {
  return (
    <Container>
        <Welcome useMockData={true} />
        <Congratulation>Félicitation ! Vous avez explosé vos objectifs hier 👏</Congratulation>
        <Content>
            <LeftBloc>
                <Activity useMockData={true} /> 
                <CardContainer>
                  <AverageSession useMockData={true} />
                  <RadarChartComponent useMockData={true} />
                  <RadialBarChart useMockData={true} />
                </CardContainer>
            </LeftBloc>
            <RigthBloc>
                <Calories  useMockData={true}/>
            </RigthBloc>
        </Content>
    </Container>
  )
}

export default Dashboard