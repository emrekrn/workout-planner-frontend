import { ExerciseData } from './ExerciseData';

export interface WorkoutDetailsModel {
	workoutName: string;
	workoutDestiption: string;
	exercises: ExerciseData[];
}
