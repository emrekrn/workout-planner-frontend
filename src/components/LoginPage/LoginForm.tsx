import React, { FormEvent, useContext, useState } from 'react';
import '../../assets/style/login.scss';
import Input from '../ui/Input';
import { Alert, Button } from 'react-bootstrap';
import { loginUser } from '../../services/api';
import { AxiosError, AxiosResponse } from 'axios';
import { UserAuthenticationContext } from '../../context/UserAuthenticationContext';

const Login = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [errorMessage, setErrorMessage] = useState('');
	const { setUserId, setUserToken } = useContext(UserAuthenticationContext);

	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault();
		try {
			const response: AxiosResponse = await loginUser({
				email: email,
				password: password,
			});
			if (response.status == 200) {
				setUserId(response.data.userId);
				setUserToken(response.data.userId);
			}
		} catch (err) {
			if (err instanceof AxiosError) {
				if (err.response?.status == 401) {
					setErrorMessage('Wrong email or wrong password');
				}
			}
		}
	};

	return (
		<div className='login-field p-2'>
			<h1 className='text-white'>Log in</h1>
			<p className='text-grey'>
				Don't have an account yet?
				<a className='create-account-link mx-2' href='/register'>
					Create an account
				</a>
			</p>
			<form onSubmit={handleSubmit} noValidate>
				<Input
					labelText='Email'
					id='email'
					inputType='text'
					col='col-12'
					setFunction={setEmail}
				/>
				<Input
					labelText='Password '
					id='password'
					inputType='password'
					col='col-12'
					setFunction={setPassword}
				/>
				<div className='col-12 d-flex flex-column align-items-center'>
					<Button type='submit' variant='primary' className='w-25'>
						Log in
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

export default Login;
