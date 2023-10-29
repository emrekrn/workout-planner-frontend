import React from 'react';
import './register.scss';
import Input from '../InputComponent/Input';
import { Button } from 'react-bootstrap';

const Register = () => {
	return (
		<div className='register-field p-2'>
			<h1 className='text-white'>Register</h1>
			<p className='text-grey'>
				Already hav an account?
				<a className='create-account-link mx-2' href='#'>
					Login
				</a>
			</p>
			<div className='row'>
				<Input
					labelText='First name'
					id='firstname'
					inputType='text'
					col='col-6'
				/>
				<Input
					labelText='Last name'
					id='lastname'
					inputType='text'
					col='col-6'
				/>
			</div>
			<Input labelText='Username' id='username' inputType='text' col='col-12' />
			<Input labelText='Email' id='email' inputType='email' col='col-12' />
			<Input
				labelText='Password'
				id='password'
				inputType='password'
				col='col-12'
			/>
			<Input
				labelText='Password confirmation'
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

export default Register;
