const BASE_URL = "http://localhost:3000/user";

export async function fetchUserData(userId) {
    const response = await fetch(`${BASE_URL}/${userId}`);
    if (!response.ok) {
        throw new Error(`Une erreur est survenue: ${response.status}`);
    }
    return response.json();
}

export async function fetchUserActivity(userId) {
    const response = await fetch(`${BASE_URL}/${userId}/activity`);
    if (!response.ok) {
        throw new Error(`Une erreur est survenue: ${response.status}`);
    }
    return response.json();
}

export async function fetchUserAverageSessions(userId) {
    const response = await fetch(`${BASE_URL}/${userId}/average-sessions`);
    if (!response.ok) {
        throw new Error(`Une erreur est survenue: ${response.status}`);
    }
    return response.json();
}

export async function fetchUserPerformance(userId) {
    const response = await fetch(`${BASE_URL}/${userId}/performance`);
    if (!response.ok) {
        throw new Error(`Une erreur est survenue: ${response.status}`);
    }
    return response.json();
}
