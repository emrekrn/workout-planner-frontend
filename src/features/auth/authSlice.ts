import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store.ts';

export interface AuthState {
	userId: number;
	userToken: number;
	status: 'guest' | 'loggedIn' | 'unauthenticated';
}

const initialState: AuthState = {
	userId: 1,
	userToken: 1,
	status: 'unauthenticated',
};

export const authSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		logIn: (state, action) => {
			const { userId, userToken, status } = action.payload;
			state.userId = userId;
			state.userToken = userToken;
			state.status = status;
		},
		logOut: (state, action) => {
			state.userId = 0;
			state.userToken = 0;
			state.status = 'unauthenticated';
		},
	},
});

export const { logIn, logOut } = authSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const getUserId = (state: RootState) => state.userAuth.userId;
export const getUserToken = (state: RootState) => state.userAuth.userToken;
export default authSlice.reducer;
