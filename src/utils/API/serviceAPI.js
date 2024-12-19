const BASE_URL = "http://localhost:3000/user";

//info user + complétion objectifs
export async function fetchUserData(userId) {
    const response = await fetch(`${BASE_URL}/${userId}`);
    if (!response.ok) {
        throw new Error(`Une erreur est survenue: ${response.status}`);
    }
    return response.json();
}

//activité quotidienne + chiffres clés (informations sur les calories, protéines, glucides et lipides de la journée)
export async function fetchUserActivity(userId) {
    const response = await fetch(`${BASE_URL}/${userId}/activity`);
    if (!response.ok) {
        throw new Error(`Une erreur est survenue: ${response.status}`);
    }
    return response.json();
}

//durée session
export async function fetchUserAverageSessions(userId) {
    const response = await fetch(`${BASE_URL}/${userId}/average-sessions`);
    if (!response.ok) {
        throw new Error(`Une erreur est survenue: ${response.status}`);
    }
    return response.json();
}

//type d'activité
export async function fetchUserPerformance(userId) {
    const response = await fetch(`${BASE_URL}/${userId}/performance`);
    if (!response.ok) {
        throw new Error(`Une erreur est survenue: ${response.status}`);
    }
    return response.json();
}
