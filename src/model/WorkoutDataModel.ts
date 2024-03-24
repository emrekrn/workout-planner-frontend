export interface WorkoutData {
	id: number;
	workoutName: string;
	workoutCategory: string;
	isFavourite: boolean;
	isSelected: boolean;
	exerciseNumber: number;
}

export interface CreateWorkoutRequest {
	userId: number;
	workoutName: string;
}
