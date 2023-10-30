import axios from 'axios';

interface RegisterRequest {
	firstName: string;
	lastName: string;
	username: string;
	email: string;
	password: string;
	passwordConfirmation: string;
}
interface LoginRequest {
	username: string;
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
	api.post('/users', requestData);
};

export const loginUser = (requestData: LoginRequest) => {
	console.log(requestData);
};
