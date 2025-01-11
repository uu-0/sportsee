import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';

import styled from 'styled-components';
import colors from '../utils/style/colors';

import { fetchUserPerformance } from '../utils/API/serviceAPI';

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
`;

function RadarChartComponent() {
  const { userId } = useParams();
  const [performanceData, setPerformanceData] = useState([]);

  useEffect(() => {
    fetchUserPerformance(userId, setPerformanceData);
  }, [userId]);

  return (
    <Container>
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart data={performanceData} outerRadius="70%">
          <PolarGrid radialLines={false} />
          <PolarAngleAxis
            dataKey="kind"
            tick={{ fill: 'white', fontSize: 10 }}
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
  );
}

export default RadarChartComponent;
