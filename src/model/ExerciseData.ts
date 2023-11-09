export interface ExerciseData {
	exerciseName: string;
	sets: SetData[];
}

interface SetData {
	setNr: number;
	repeat: number;
}
