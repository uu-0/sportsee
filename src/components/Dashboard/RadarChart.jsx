import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts'

import styled from 'styled-components'
import colors from '../../utils/style/colors'

import { mockUserPerformance } from '../../utils/API/mockAPI'
import { fetchUserPerformance } from '../../utils/API/serviceAPI'

const Container = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 5px;
  background-color: ${colors.darkGray};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`

const Translations = {
  energy: 'Énergie',
  strength: 'Force',
  speed: 'Vitesse',
  endurance: 'Endurance',
  intensity: 'Intensité',
  cardio: 'Cardio',
}

function RadarChartComponent({ useMockData }) {
  const { userId } = useParams()
  const [performanceData, setPerformanceData] = useState([])

  useEffect(() => {

    if (useMockData) {
      const userPerformance = mockUserPerformance[userId]
      if (userPerformance) {
        const formattedData = userPerformance.data.map((item) => ({
          value: item.value,
          kind: Translations[userPerformance.kind[item.kind]] || userPerformance.kind[item.kind],
        }))
        setPerformanceData(formattedData)
      } else {
        console.error('Performance non trouvée pour cet utilisateur.')
      }
    } else {
      fetchUserPerformance(userId)
        .then((data) => {
          const formattedData = data.data.map((item) => ({
            value: item.value,
            kind: Translations[data.kind[item.kind]] || data.kind[item.kind],
          }))
          setPerformanceData(formattedData)
        })
        .catch((error) => console.error('Erreur lors de la récupération des performances:', error))
    }
  }, [userId, useMockData])

  return (
    <Container>
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart data={performanceData} outerRadius="70%">
            <PolarGrid radialLines={false} />
            <PolarAngleAxis
                dataKey="kind"
                tick={{ fill: 'white', fontSize: 10}}
            />
            <Radar
                name="Performance"
                dataKey="value"
                stroke="transparent"
                fill={colors.red}
                fillOpacity={0.7}
            />
        </RadarChart>
      </ResponsiveContainer>
    </Container>
  )
}

export default RadarChartComponent
