import { configureStore } from '@reduxjs/toolkit';
import authSlice from '../features/auth/authSlice';
import workoutsSlice from '../features/workout/workoutSlice.ts';

export const store = configureStore({
	reducer: {
		userAuth: authSlice,
		workouts: workoutsSlice,
	},
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
