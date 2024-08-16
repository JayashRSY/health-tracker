export interface Workout {
    type: string;
    minutes: number;
}

export interface User {
    id: number;
    name: string;
    workouts: Workout[];
}

export interface UserData {
    id: number;
    name: string;
    workouts: Workout[];
    totalWorkouts?: number;
    totalMinutes?: number;
}

export interface Workout {
    type: string;
    minutes: number;
}