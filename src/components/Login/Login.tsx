import React from 'react';
import './login.scss';
import Input from '../InputComponent/Input';
import { Button } from 'react-bootstrap';

const Login = () => {
	return (
		<div className='login-field p-2'>
			<h1 className='text-white'>Log in</h1>
			<p className='text-grey'>
				Don't have an account yet?
				<a className='create-account-link mx-2' href='#'>
					Create an account
				</a>
			</p>
			<Input labelText='Username' id='username' inputType='text' col='col-12' />
			<Input
				labelText='Password '
				id='password'
				inputType='password'
				col='col-12'
			/>
			<div className='col-12 d-flex justify-content-center'>
				<Button variant='primary' className='w-25'>
					Log in
				</Button>
			</div>
		</div>
	);
};

export default Login;
