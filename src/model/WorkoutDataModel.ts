export interface WorkoutData {
	workoutName: string | null;
}

export interface CreateWorkoutRequest {
	userId: number;
	workoutName: string;
}
