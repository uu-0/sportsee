//données mockées
export const mockUserData = {
    1: {
        id: 1,
        userInfos: { firstName: "Jane", lastName: "Doe", age: 31 },
        todayScore: 0.7,
        keyData: { calorieCount: 2000, proteinCount: 150, carbohydrateCount: 300, lipidCount: 50 },
    },
    2: {
        id: 2,
        userInfos: { firstName: "John", lastName: "Doe", age: 28 },
        todayScore: 0.8,
        keyData: { calorieCount: 2200, proteinCount: 180, carbohydrateCount: 350, lipidCount: 60 },
    }
};

export const mockUserActivity = {
    1: {
        userId: 1,
        sessions: [
            { day: "2024-12-01", kilogram: 75, calories: 200 },
            { day: "2024-12-02", kilogram: 74, calories: 240 },
        ],
    },
    2: {
        userId: 2,
        sessions: [
            { day: "2024-12-01", kilogram: 80, calories: 180 },
            { day: "2024-12-02", kilogram: 79, calories: 210 },
        ],
    }
};

export const mockUserAverageSessions = {
    1: {
        userId: 1,
        sessions: [
            { day: 1, sessionLength: 30 },
            { day: 2, sessionLength: 40 },
        ],
    },
    2: {
        userId: 2,
        sessions: [
            { day: 1, sessionLength: 25 },
            { day: 2, sessionLength: 35 },
        ],
    }
};

export const mockUserPerformance = {
    1: {
        userId: 1,
        data: [
            { value: 200, kind: 1 },
            { value: 150, kind: 2 },
        ],
        kind: { 1: "cardio", 2: "energy" },
    },
    2: {
        userId: 2,
        data: [
            { value: 220, kind: 1 },
            { value: 170, kind: 2 },
        ],
        kind: { 1: "cardio", 2: "energy" },
    }
};
