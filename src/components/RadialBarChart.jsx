import React, { useState, useEffect } from 'react'
import { RadialBarChart, RadialBar, ResponsiveContainer } from 'recharts'
import { useParams } from 'react-router-dom'

import styled from 'styled-components'

import { fetchUserScore } from '../utils/API/serviceAPI'
import colors from '../utils/style/colors'

const Container = styled.div`
  width: 400px;
  height: 400px;
  background-color: ${colors.gray};
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`

const Title = styled.p`
  width: 140px;
  color: black;
  font-size: 18px;
  position: absolute;
  font-weight: bold;
  color: ${colors.darkGray};
  top: 8px;
  left: 30px;
`

const ScoreLabel = styled.div`
  position: absolute;
  text-align: center;

  & > p {
    margin: 0;
  }

  & .percentage {
    font-size: 24px;
    font-weight: bold;
    color: black;
  }

  & .text {
    font-size: 14px;
    opacity: 0.7;
  }
`

function RadialChart() {
  const { userId } = useParams()
  const [userData, setUserData] = useState({})

  useEffect(() => {
    fetchUserScore(userId, setUserData)
  }, [userId])

  const score = userData.todayScore || userData.score || 0
  const percentage = Math.round(score * 100)

  const chartData = [
    { name: 'Score', value: percentage, fill: '#FF0000' },
    { name: 'Remaining', value: 100 - percentage, fill: colors.gray },
  ]

  return (
    <Container>
      <ResponsiveContainer width="100%" height="100%">      
        <Title>Score</Title>
        <RadialBarChart
          cx="50%"
          cy="50%"
          innerRadius="65%"
          outerRadius="90%"
          barSize={10}
          data={chartData}
          startAngle={90}
          endAngle={450}
        >
          <circle cx="50%" cy="50%" r="29%"  fill="#fff"/>
          <RadialBar
            minAngle={15}
            background
            clockWise
            dataKey="value"              
            cornerRadius={50}
          />
        </RadialBarChart>
      </ResponsiveContainer>
      <ScoreLabel>
        <p className="percentage">{percentage}%</p>
        <p className="text">de votre objectif</p>
      </ScoreLabel>
    </Container>
  );
}

export default RadialChart
