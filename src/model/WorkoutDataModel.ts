export interface WorkoutData {
	workoutId: number;
	workoutName: string;
}

export interface CreateWorkoutRequest {
	userId: number;
	workoutName: string;
}
