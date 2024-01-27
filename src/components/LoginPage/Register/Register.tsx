import { FormEvent, useContext, useState } from 'react';
import './register.scss';
import Input from '../../InputComponent/Input';
import { Alert, Button } from 'react-bootstrap';
import { registerUser } from '../../../services/api';
import { UserAuthenticationContext } from '../../../context/UserAuthenticationContext';
import { AxiosError } from 'axios';

const Register = () => {
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [username, setUsername] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [passwordConfirmation, setPasswordConfirmation] = useState('');
	const [errorMessage, setErrorMessage] = useState('');

	const { setUserToken, setUserId, userId, userToken } = useContext(
		UserAuthenticationContext
	);

	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault();

		if (!email) {
			setErrorMessage('Email can not be empty');
			return;
		} else if (!password) {
			setErrorMessage('Password can not be empty');
			return;
		} else if (!passwordConfirmation) {
			setErrorMessage('Password confirmation can not be empty');
			return;
		} else if (password != passwordConfirmation) {
			setErrorMessage('Passwords are not same');
			return;
		}

		try {
			const response = await registerUser({
				firstName: firstName,
				lastName: lastName,
				username: username,
				email: email,
				password: password,
				passwordConfirmation: passwordConfirmation,
			});
			if (response.status == 201) {
				setUserId(response.data.userId);
				setUserToken(response.data.userId);
				console.log(userId);
				console.log(userToken);
			}
		} catch (err: unknown) {
			if (err instanceof AxiosError) {
				if (err.response?.status == 409) {
					setErrorMessage('User email already exists!');
					console.log('test');
					return;
				}
			}
		}

		console.log('test');
	};

	return (
		<div className='register-field p-2'>
			<h1 className='text-white'>Register</h1>
			<p className='text-grey'>
				Already have an account?
				<a className='create-account-link mx-2' href='/'>
					Login
				</a>
			</p>
			<form onSubmit={handleSubmit} noValidate>
				<div className='row'>
					<Input
						labelText='First name'
						id='firstname'
						inputType='text'
						col='col-6'
						setFunction={setFirstName}
					/>
					<Input
						labelText='Last name'
						id='lastname'
						inputType='text'
						col='col-6'
						setFunction={setLastName}
					/>
				</div>
				<Input
					labelText='Username'
					id='username'
					inputType='text'
					col='col-12'
					setFunction={setUsername}
				/>
				<Input
					labelText='Email'
					id='email'
					inputType='email'
					col='col-12'
					setFunction={setEmail}
				/>
				<Input
					labelText='Password'
					id='password'
					inputType='password'
					col='col-12'
					setFunction={setPassword}
				/>
				<Input
					labelText='Password confirmation'
					id='passwordConfirmation'
					inputType='password'
					col='col-12'
					setFunction={setPasswordConfirmation}
				/>

				<div className='col-12 d-flex flex-column align-items-center'>
					<Button type='submit' variant='primary' className='w-50'>
						Create an Account
					</Button>
					{errorMessage && (
						<Alert className='mt-2' key='danger' variant='danger'>
							{errorMessage}
						</Alert>
					)}
				</div>
			</form>
		</div>
	);
};

export default Register;
