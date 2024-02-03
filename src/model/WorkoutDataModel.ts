export interface WorkoutData {
	workoutId: number;
	workoutName: string;
	isFavourite: boolean;
}

export interface CreateWorkoutRequest {
	userId: number;
	workoutName: string;
}
