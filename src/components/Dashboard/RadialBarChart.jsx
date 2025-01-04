import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {RadialBarChart, RadialBar, ResponsiveContainer} from 'recharts'

import styled from 'styled-components'
import colors from '../../utils/style/colors'

import { mockUserData } from '../../utils/API/mockAPI'
import { fetchUserData } from '../../utils/API/serviceAPI'

const Container = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 5px;
  background-color: #fbfbfb;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`

const ScoreLabel = styled.div`
  position: absolute;
  text-align: center;
  color: black;

  & > p {
    margin: 0;
  }

  & .percentage {
    font-size: 24px;
    font-weight: bold;
  }

  & .text {
    font-size: 14px;
    opacity: 0.7;
  }
`

const Title = styled.p`
  width: 140px;
  color: black;
  font-size: 15px;
  position: absolute;
  top: 8px;
  left: 30px;
`

function RadialScore({ useMockData }) {
  const { userId } = useParams()
  const [data, setData] = useState([])

  useEffect(() => {
    if (useMockData) {
      const userData = mockUserData[userId];
      if (userData) {
        //conversion format attendu par rechart
        const scoreData = [
          {
            value: userData.todayScore * 100 || 0,
            fill: colors.red,
          },
        ]
        setData(scoreData)
      } else {
        console.error("Utilisateur non trouvé dans les données mockées.")
      }
    } else {
      fetchUserData(userId)
        .then((data) => {
          //conversion format attendu par rechart
          const scoreData = [
            {
              value: data.todayScore * 100 || 0,
              fill: colors.red,
            },
          ]
          setData(scoreData)
        })
        .catch((error) =>
          console.error("Erreur lors de la récupération des données :", error)
        ) 
    }
  }, [userId, useMockData])

  return (
    <Container>
      <Title>Score</Title>
      <ResponsiveContainer width="100%" height="100%">
      <RadialBarChart
        cx="50%"
        cy="50%"
        innerRadius="65%"
        outerRadius="80%"
        barSize={10}
        data={data}
        startAngle={90}
        endAngle={360}
      >
      <circle cx="50%" cy="50%" r="29%" fill="#fff"/>
      <RadialBar
            minAngle={15}
            clockWise
            dataKey="value"
            cornerRadius={50}
          />
        </RadialBarChart>
      </ResponsiveContainer>
      <ScoreLabel>
        <p className="percentage">{data.length > 0 ? Math.round(data[0].value) : 0}%</p>
        <p className="text">de votre objectif</p>
      </ScoreLabel>
    </Container>
  )
}

export default RadialScore
