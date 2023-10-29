import React, { FormEvent, useState, useEffect } from 'react';
import './login.scss';
import Input from '../InputComponent/Input';
import { Button } from 'react-bootstrap';
import { findAllUsers, loginUser } from '../../services/api';

const Login = () => {
	const [username, setUsername] = useState<string>('');
	const [password, setPassword] = useState<string>('');

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
		loginUser({
			username: username,
			password: password,
		});
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
					labelText='Username'
					id='username'
					inputType='text'
					col='col-12'
					setFunction={setUsername}
				/>
				<Input
					labelText='Password '
					id='password'
					inputType='password'
					col='col-12'
					setFunction={setPassword}
				/>
				<div className='col-12 d-flex justify-content-center'>
					<Button type='submit' variant='primary' className='w-25'>
						Log in
					</Button>
				</div>
			</form>
		</div>
	);
};

export default Login;
