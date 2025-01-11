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
        score: 0.8,
        keyData: { calorieCount: 2200, proteinCount: 180, carbohydrateCount: 350, lipidCount: 60 },
    }
};

export const mockUserActivity = {
    1: {
        userId: 1,
        sessions: [
            { day: "2024-11-29", kilogram: 55.4, calories: 200 },
            { day: "2024-11-30", kilogram: 55.5, calories: 240 },
            { day: "2024-12-01", kilogram: 55.9, calories: 250 },
            { day: "2024-12-02", kilogram: 56.4, calories: 220 },
            { day: "2024-12-03", kilogram: 56.1, calories: 230 },
            { day: "2024-12-04", kilogram: 56.8, calories: 210 },
            { day: "2024-12-05", kilogram: 57.0, calories: 250 },
            { day: "2024-12-06", kilogram: 57.3, calories: 230 },
            { day: "2024-12-07", kilogram: 56.6, calories: 240 },
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
            { day: "2024-12-05", kilogram: 78, calories: 240 },
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
        ],
    }
};

export const mockUserPerformance = {
    1: {
        userId: 1,
        kind: {
            1: 'cardio',
            2: 'energy',
            3: 'endurance',
            4: 'strength',
            5: 'speed',
            6: 'intensity'
        },
        data: [
            {
                value: 80,
                kind: 1
            },
            {
                value: 120,
                kind: 2
            },
            {
                value: 140,
                kind: 3
            },
            {
                value: 50,
                kind: 4
            },
            {
                value: 200,
                kind: 5
            },
            {
                value: 90,
                kind: 6
            }
        ]
    },
    2: {
        userId: 2,
        kind: {
            1: 'cardio',
            2: 'energy',
            3: 'endurance',
            4: 'strength',
            5: 'speed',
            6: 'intensity'
        },
        data: [
            {
                value: 200,
                kind: 1
            },
            {
                value: 240,
                kind: 2
            },
            {
                value: 80,
                kind: 3
            },
            {
                value: 80,
                kind: 4
            },
            {
                value: 220,
                kind: 5
            },
            {
                value: 110,
                kind: 6
            }
        ]
    }
};
