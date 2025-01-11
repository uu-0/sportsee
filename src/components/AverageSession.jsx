import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer, Rectangle } from 'recharts'

import styled from 'styled-components'
import colors from '../utils/style/colors'

import { fetchUserAverageSession } from '../utils/API/serviceAPI'

const Container = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 5px;
  background-color: ${colors.red};
  position: relative;
  overflow: hidden;
`

const Title = styled.p`
  width: 140px;
  color: white;
  opacity: 0.7;
  font-size: 15px;
  position: absolute;
  top: 8px;
  left: 30px;
  z-index: 1;
`

const TooltipContainer = styled.div`
  background-color: white;
  color: black;
  padding: 5px 10px;
  font-size: 12px;
  position: relative;
`
function CustomDot(props) {
  //cx: position horizontale, cy: position verticale
  const { cx, cy } = props;

  /* return un élèment svg
   * g: groupe d'autres élèments svg
   * rect: dessine un rectangle */
  return (
    <g> 
      {/* définition filtre ombre */}
      <defs>
        <filter id="whiteShadow" x="-50%" y="-50%" width="200%" height="200%">
          <feDropShadow
            dx="0"
            dy="0"
            stdDeviation="3"
            floodColor="white" 
            floodOpacity="0.9" 
          />
        </filter>
      </defs>

      <rect
        x={cx} 
        y={cy - 300} 
        width={'100vh'} 
        height={'100vh'} 
        fill="rgba(0, 0, 0, 0.15)" 
        rx="5" 
        ry="5" 
        style={{ zIndex: -1 }}
      />

      <circle 
        cx={cx} 
        cy={cy} 
        r={5} 
        fill="white" 
        filter="url(#whiteShadow)"
       />
    </g>
  )
}

function CustomTooltip({ active, payload }) {
  if (active && payload && payload.length) {
    return (
      <TooltipContainer>
        {`${payload[0].value} min`}
      </TooltipContainer>
    )
  }
  return null
}


function AverageSession() {
  const { userId } = useParams();
  const [averageData, setAverageData] = useState([]);

  useEffect(() => {
    fetchUserAverageSession(userId, setAverageData)
  }, [userId])

  return (
    <Container>
      <Title>Durée moyenne des sessions</Title>
      <ResponsiveContainer width="100%" height="100%">
      <LineChart data={averageData} margin={{ top: 100, right: 0, left: 0, bottom: 0 }}>
          <XAxis
            dataKey="day"
            axisLine={false}
            tickLine={false}
            stroke="white"
            tickFormatter={(value, index) =>
              index === 0 || index === averageData.length - 1 ? '' : value
            }
            style={{ fontSize: '14px', opacity: 0.5, zIndex: 1 }}
          />
          <Tooltip content={<CustomTooltip />} cursor={false}/>
          <defs>
            <linearGradient id="lineGradient">
              <stop offset="0%" stopColor="rgba(255, 255, 255, 0.4)"/>
              <stop offset="100%" stopColor="white"/>
            </linearGradient>
          </defs>
          <Line
            type="monotone"
            dataKey="sessionLength"
            stroke="url(#lineGradient)"
            strokeWidth={2}
            dot={false}
            activeDot={<CustomDot />}
            style={{ zIndex: 1 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </Container>
  )
}

export default AverageSession 
