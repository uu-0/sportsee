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
            { day: "2024-11-29", kilogram: 55.4, calories: 200 },
            { day: "2024-11-30", kilogram: 55.1, calories: 240 },
            { day: "2024-12-01", kilogram: 55.9, calories: 250 },
            { day: "2024-12-02", kilogram: 56.4, calories: 220 },
            { day: "2024-12-03", kilogram: 56.1, calories: 230 },
            { day: "2024-12-04", kilogram: 56.8, calories: 210 },
            { day: "2024-12-05", kilogram: 57.0, calories: 260 },
            { day: "2024-12-06", kilogram: 57.3, calories: 230 },
            { day: "2024-12-07", kilogram: 56.6, calories: 240 },
            { day: "2024-12-08", kilogram: 56.2, calories: 250 },
        ],
    },
    2: {
        userId: 2,
        sessions: [
            { day: "2024-11-29", kilogram: 80, calories: 180 },
            { day: "2024-11-30", kilogram: 79, calories: 210 },
            { day: "2024-12-01", kilogram: 79, calories: 220 },
            { day: "2024-12-02", kilogram: 78, calories: 200 },
            { day: "2024-12-03", kilogram: 78, calories: 190 },
            { day: "2024-12-04", kilogram: 78, calories: 230 },
            { day: "2024-12-05", kilogram: 77, calories: 240 },
            { day: "2024-12-06", kilogram: 77, calories: 250 },
            { day: "2024-12-07", kilogram: 76, calories: 260 },
            { day: "2024-12-08", kilogram: 76, calories: 270 },
        ],
    }
};

export const mockUserAverageSessions = {
    1: {
        userId: 1,
        sessions: [
            { day: 1, sessionLength: 30 },
            { day: 2, sessionLength: 40 },
            { day: 3, sessionLength: 35 },
            { day: 4, sessionLength: 50 },
            { day: 5, sessionLength: 30 },
            { day: 6, sessionLength: 20 },
            { day: 7, sessionLength: 45 },
            { day: 8, sessionLength: 40 },
            { day: 9, sessionLength: 30 },
            { day: 10, sessionLength: 50 },
        ],
    },
    2: {
        userId: 2,
        sessions: [
            { day: 1, sessionLength: 25 },
            { day: 2, sessionLength: 35 },
            { day: 3, sessionLength: 30 },
            { day: 4, sessionLength: 40 },
            { day: 5, sessionLength: 20 },
            { day: 6, sessionLength: 15 },
            { day: 7, sessionLength: 50 },
            { day: 8, sessionLength: 45 },
            { day: 9, sessionLength: 40 },
            { day: 10, sessionLength: 55 },
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
