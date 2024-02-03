import axios from 'axios';
import { CreateWorkoutRequest } from '../model/WorkoutDataModel';

interface RegisterRequest {
	firstName: string;
	lastName: string;
	username: string;
	email: string;
	password: string;
	passwordConfirmation: string;
}
interface LoginRequest {
	email: string;
	password: string;
}

const API_BASE_URL = 'http://localhost:8080';

const api = axios.create({
	baseURL: API_BASE_URL,
	headers: {
		'Content-Type': 'application/json',
		// You can include other headers here, such as authentication tokens
	},
});

export const registerUser = (requestData: RegisterRequest) => {
	return api.post('/register', requestData);
};

export const loginUser = (requestData: LoginRequest) => {
	return api.post('/login', requestData);
};

export const createWorkout = (requestData: CreateWorkoutRequest) => {
	return api.post('/workouts/create-workout', requestData);
};
