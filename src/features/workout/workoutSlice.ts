import { createSelector, createSlice } from '@reduxjs/toolkit';
import { WorkoutData } from '../../model/WorkoutDataModel.ts';
import { RootState } from '../../app/store.ts';
import { workoutData } from '../../utils/testData/data.ts';
import { v4 as uuidv4 } from 'uuid';
import workout from '../../components/WorkoutsPage/Workout/Workout.tsx';

export interface WorkoutsState {
	workouts: WorkoutData[];
	selectedWorkoutId: number;
}

const initialState: WorkoutsState = {
	workouts: [...workoutData],
	selectedWorkoutId: 0,
};

export const workoutsSlice = createSlice({
	name: 'workouts',
	initialState,
	reducers: {
		createWorkout: {
			reducer(state, action) {
				const { id, workoutName } = action.payload;
				const workout: WorkoutData = {
					id: id,
					workoutName: workoutName,
					workoutCategory: 'test',
					isFavourite: false,
					isSelected: false,
					exerciseNumber: 0,
				};
				state.workouts.push(workout);
			},
			prepare(workoutData) {
				const { workoutName } = workoutData;
				return { payload: { id: uuidv4(), workoutName: workoutName } };
			},
		},
		deleteWorkout: (state, action) => {
			const { id } = action.payload;
			state.workouts = state.workouts.filter((workout) => workout.id !== id);
		},
		editWorkout: (state, action) => {
			const { id, workoutName } = action.payload;
			state.workouts = state.workouts.map((workout) => {
				if (workout.id === id) {
					return {
						...workout,
						workoutName: workoutName,
					};
				}
				return workout;
			});
		},
		setWorkoutFavourite: (state, action) => {
			const { id } = action.payload;
			console.log(id);
			state.workouts = state.workouts.map((workout) => {
				if (workout.id === id) {
					return {
						...workout,
						isFavourite: !workout.isFavourite,
					};
				}
				return workout;
			});
		},
		setWorkoutSelected: (state, action) => {
			const { id } = action.payload;

			state.workouts = state.workouts.map((workout) => {
				if (workout.id === id) {
					state.selectedWorkoutId = id;
					return {
						...workout,
						isSelected: true,
					};
				}
				return { ...workout, isSelected: false };
			});
		},
	},
});

export const {
	createWorkout,
	setWorkoutFavourite,
	selectWorkout,
	setWorkoutSelected,
	deleteWorkout,
	editWorkout,
} = workoutsSlice.actions;

export const getWorkouts = (state: RootState) => {
	return state.workouts.workouts;
};

export const getWorkoutById = createSelector(
	(state) => state.workouts.workouts,
	(_, id) => id,
	(workouts, id) => workouts.find((workout: WorkoutData) => workout.id === id)
);

export const getSelectedWorkout = (state: RootState) =>
	state.workouts.workouts.find(
		(workout) => workout.id === state.workouts.selectedWorkoutId
	);

export default workoutsSlice.reducer;
