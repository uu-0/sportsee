import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import dayjs from 'dayjs'

import styled from 'styled-components'
import colors from '../../utils/style/colors'

import { mockUserActivity } from '../../utils/API/mockAPI'
//import { fetchActivityData } from '../../utils/API/serviceAPI'

const Container = styled.div`
  padding: 20px;
  width: 835px;
  background-color: ${colors.gray};
  border-radius: 10px;
`

const TopContainer = styled.div`
  margin: 10px 20px 5px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Content = styled.div`
  margin: 60px 20px 15px 20px;
  position: relative;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 180px; 
`

const Titre = styled.h3`
  margin-top: 0;
  font-size: 15px;
  font-weight: 600;
  color: ${colors.darkGray};
`

const Legende = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 10px;
  align-items: center;
  gap: 10px;
  font-size: 14px;
  font-weight: 500;
  color: ${colors.lightGray};

  span {
    display: inline-block;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    margin-right: 5px;
  }

  .poids {
    background-color: ${colors.darkGray}; 
  }

  .calories {
    background-color :${colors.red};
  }
`

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div 
      style={{ 
        height: '64px',
        background: colors.red, 
        color: colors.white, 
        padding: '5px 10px', 
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '10px' }}>
        <p>{`${payload[0].value}kg`}</p>
        <p>{`${payload[1].value}Kcal`}</p>
      </div>
    )
  }
  return null;
}

function BarChartActivity() {
  const { userId } = useParams()
  const [activityData, setActivityData] = useState([])

  useEffect(() => {
    //utilisation des données mockées
    const activity = mockUserActivity[userId]
    if (activity) {
      setActivityData(activity.sessions)
    } else {
      console.error('Activité de l\'utilisateur non trouvée')
    }

    //version finale avec les données de l'API
    /*
    fetchActivityData(userId)
      .then(data => setActivityData(data.sessions))
      .catch(error => console.error('Erreur lors de la récupération des données:', error));
    */
  }, [userId])

  //calcul moyenne poids
  const moyenne = activityData.reduce((acc, session) => acc + session.kilogram, 0) / activityData.length;
  const moyennePlusUn = moyenne + 1;
  const moyenneMoinsUn = moyenne - 1;

  return (
    <Container>
      <TopContainer>
        <Titre>Activité quotidienne</Titre>
        <Legende>
          <div>
            <span className="poids"></span> Poids (kg)
          </div>
          <div>
            <span className="calories"></span> Calories brûlées (kCal)
          </div>
        </Legende>
      </TopContainer>
      <Content>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={activityData}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
            barCategoryGap="20%"
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} horizontal={true}/>
            <XAxis 
              dataKey="day"
              stroke="transparent" 
              tickFormatter={(date) => dayjs(date).format('D')}
              tick={{ fill: '#74798C', fontSize: 14 }}
              axisLine={{ stroke: '#DEDEDE', strokeWidth: 1.5 }}
            />
            <YAxis 
              yAxisId="kg"
              dataKey="kilogram"
              orientation="right"
              domain={[moyenneMoinsUn, moyennePlusUn]} 
              ticks={[moyenneMoinsUn, moyenne, moyennePlusUn]} 
              tickFormatter={(tick) => tick.toFixed(0)}
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#74798C', fontSize: 14 }}
              allowDataOverflow={true} 
            />
            <YAxis 
              yAxisId="cal"
              dataKey="calories"
              hide
            />
            <Tooltip content={<CustomTooltip />} />
            <Bar 
              yAxisId="kg"
              dataKey="kilogram" 
              fill="#282D30" 
              radius={[5, 5, 0, 0]} 
              barSize={7}
            />
            <Bar 
              yAxisId="cal"
              dataKey="calories" 
              fill="#E60000" 
              radius={[5, 5, 0, 0]} 
              barSize={7}
            />
          </BarChart>
        </ResponsiveContainer>
      </Content>
    </Container>
  );
};

export default BarChartActivity;
