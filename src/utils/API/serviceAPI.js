import { mockUserData, 
         mockUserActivity, 
         mockUserAverageSessions, 
         mockUserPerformance } from './mockAPI.js'
import config from './config'
import colors from '../style/colors.js'

const API_BASE_URL = "http://localhost:3000/user"

/**
 * fonction pour récupérer les données de l'API : user main data
 * @param {number} userId 
 * @param {function} setUserName 
 */
export async function fetchUserData(userId, setUserName) {
  if (config.useMockedData) {
    const data = mockUserData[userId]
    if (data) {
      setUserName(data.userInfos.firstName)
    } 
    else {
      console.error('Erreur lors de la récupération des données')
    }
  } else {
    try {
      const response = await fetch(`${API_BASE_URL}/${userId}`)
      const data = await response.json()
      setUserName(data.data.userInfos.firstName)
    } 
    catch (error) {
      console.log('Erreur lors de la récupération des données:', error)
    }
  }
}

/**
 * fonction pour récupérer les données de l'API : user activity
 * @param {number} userId 
 * @param {function} setActivityData 
 */
export async function fetchUserActivity(userId, setActivityData) {
  if (config.useMockedData) {
    const data = mockUserActivity[userId]
    if (data) {
      setActivityData(data.sessions)
    } 
    else {
      console.error('Erreur lors de la récupération des données')
    }
  } else {
    try {
      const response = await fetch(`${API_BASE_URL}/${userId}/activity`)
      const data = await response.json()
      setActivityData(data.data.sessions)
    } 
    catch (error) {
      console.log('Erreur lors de la récupération des données:', error)
    }
  }
}

/**
 * fonction pour récupérer les données de l'API : average session
 * @param {number} userId 
 * @param {function} setAverageData 
 */
export async function fetchUserAverageSession(userId, setAverageData) {
  const daysOfWeek = ['L', 'M', 'M', 'J', 'V', 'S', 'D']

  if (config.useMockedData) {
    const data = mockUserAverageSessions[userId]
    if (data) {
      const sessionsWithLetters = data.sessions.map(session => ({
        ...session,
        day: daysOfWeek[session.day - 1]
      }))
      setAverageData(sessionsWithLetters)
    } 
    else {
      console.error('Erreur lors de la récupération des données')
    }
  } 
  else {
    try {
      const response = await fetch(`${API_BASE_URL}/${userId}/average-sessions`)
      const data = await response.json()
      const sessionsWithLetters = data.data.sessions.map(session => ({
        ...session,
        day: daysOfWeek[session.day - 1]
      }))
      setAverageData(sessionsWithLetters)
    } 
    catch (error) {
      console.log('Erreur lors de la récupération des données:', error)
    }
  }
}

//fonction de traduction des types
function translateKind(kind) {
  const kindTranslations = {
    1: 'Cardio',
    2: 'Énergie',
    3: 'Endurance',
    4: 'Force',
    5: 'Vitesse',
    6: 'Intensité',
  }
  return kindTranslations[kind] || 'nàn'
}

/**
 * fonction pour récupérer les données de l'API : user performance
 * @param {number} userId 
 * @param {function} setPerformanceData 
 */
export async function fetchUserPerformance(userId, setPerformanceData) {
  if (config.useMockedData){
    const userPerformance = mockUserPerformance[userId]

    if (userPerformance){
      const translatedData = userPerformance.data.map(item => ({
        value: item.value,
        kind: translateKind(item.kind),
      }))
      setPerformanceData(translatedData)
    } 
    else{
      console.error('Erreur lors de la récupération des données:')
    }
  } 
  else {
    try {
      const response = await fetch(`${API_BASE_URL}/${userId}/performance`)
      const data = await response.json()
      const userPerformance = data.data
      const translatedData = userPerformance.data.map(item => ({
        value: item.value,
        kind: translateKind(item.kind),
      }))
      setPerformanceData(translatedData)
    } catch (error) {
      console.error('Erreur lors de la récupération des données: ', error)
    }
  }
}

/**
 * fonction pour récupérer les données de l'API : user score
 * @param {number} userId 
 * @param {function} setUserData 
 */
export async function fetchUserScore(userId, setUserData) {
  if (config.useMockedData) {
    const data = mockUserData[userId]
    if (data) {
      setUserData(data);
    } else {
      console.error('Erreur lors de la récupération des données mockées');
    }
  } else {
    try {
      const response = await fetch(`http://localhost:3000/user/${userId}`);
      const data = await response.json();
      setUserData(data.data);
    } catch (error) {
      console.error('Erreur lors de la récupération des données depuis l\'API:', error);
    }
  }
}


/**
 * fonction pour récupérer les données de l'API : user informations
 * @param {number} userId 
 * @param {function} setUserData 
 */
export async function fetchUserInformations(userId, setUserData) {
  if (config.useMockedData) {
    const data = mockUserData[userId]
    console.log(data.keyData)
    if (data) {
      setUserData(data.keyData)
    } 
    else {
      console.error('Erreur lors de la récupération des données')
    }
  } 
  else {
    try {
      const response = await fetch(`${API_BASE_URL}/${userId}`)
      const data = await response.json()
      setUserData(data.data.keyData)
    } 
    catch (error) {
      console.log('Erreur lors de la récupération des données:', error)
    }
  }
}





