export interface WorkoutData {
	id: number;
	workoutName: string;
	workoutCategory: string;
	workoutDescription: string;
	exercises: ExerciseData[];
	isFavourite: boolean;
	isSelected: boolean;
}

export interface ExerciseData {
	exerciseId: number;
	exerciseName: string;
	sets: SetData[];
}

export interface SetData {
	setId: number;
	setNumber: number;
	repeat: number;
}

export interface CreateWorkoutRequest {
	userId: number;
	workoutName: string;
}
