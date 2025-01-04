import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'

import { fetchUserData } from '../../utils/API/serviceAPI'
import { mockUserData } from '../../utils/API/mockAPI'

import colors from '../../utils/style/colors'

import IconCalories from '../../utils/icons/calories-icon.png'
import IconProteines from '../../utils/icons/protein-icon.png'
import IconCarbs from '../../utils/icons/carbs-icon.png'
import IconFat from '../../utils/icons/fat-icon.png'


const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 30px;
  gap: 20px;
  width: 300px;
`

const Card = styled.div`
  height: 130px;
  border-radius: 10px;
  background-color: ${colors.gray};
  display: flex;
  align-items: center;
  padding: 10px;
`

const Info = styled.div`
  display: flex;
  margin-left: 30px;
  flex-direction: column;
  align-items: flex-start;
`

const Title = styled.p`
  margin-top: 10px;
  font-weight: bold;
  font-size: 14px;
  opacity: 0.5;
  color: ${colors.darkGray};
`

const Value = styled.p`
  font-size: 18px;
  margin: 0;
  font-weight: bold;
`

const Icon = styled.img`
  margin-left: 20px;
  width: 50px;
  height: 50px;
`

const CardItem = ({ icon, value, title }) => (
  <Card>
    <Icon src={icon} alt={title} />
    <Info>
      <Value>{value}</Value>
      <Title>{title}</Title>
    </Info>
  </Card>
)

function Calories({ useMockData }) {
  const { userId } = useParams()
  const [userData, setUserData] = useState({})

  useEffect(() => {
    const getUserData = () => {
      let data
      if (useMockData) {
        data = mockUserData[userId]
      } else {
        fetchUserData(userId).then(response => {
          data = response
          setUserData(data)
        })
      }
      setUserData(data)
    }

    getUserData()
  }, [userId, useMockData])

  const { calorieCount, proteinCount, carbohydrateCount, lipidCount } = userData.keyData || {}

  return (
    <Container>
      <CardItem
        icon={IconCalories}
        value={`${calorieCount}kCal`}
        title="Calories"
      />
      <CardItem
        icon={IconProteines}
        value={`${proteinCount}g`}
        title="Protéines"
      />
      <CardItem
        icon={IconCarbs}
        value={`${carbohydrateCount}g`}
        title="Glucides"
      />
      <CardItem
        icon={IconFat}
        value={`${lipidCount}g`}
        title="Lipides"
      />
    </Container>
  )
}

export default Calories
