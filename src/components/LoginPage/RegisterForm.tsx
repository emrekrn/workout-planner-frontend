import { FormEvent } from 'react';
import '../../assets/style/register.scss';
import Input from '../ui/Input';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { logIn } from '../../features/auth/authSlice.ts';

const Register = () => {
	const dispatch = useDispatch();
	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const email = e.currentTarget.elements.namedItem(
			'email'
		) as HTMLInputElement;
		const password = e.currentTarget.elements.namedItem(
			'email'
		) as HTMLInputElement;

		console.log(`Email: ${email.value}`);
		console.log(`Password: ${password.value}`);

		dispatch(logIn({ userId: 20, userToken: 3, status: 'loggedIn' }));
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
					/>
					<Input
						labelText='Last name'
						id='lastname'
						inputType='text'
						col='col-6'
					/>
				</div>
				<Input
					labelText='Username'
					id='username'
					inputType='text'
					col='col-12'
				/>
				<Input labelText='Email' id='email' inputType='email' col='col-12' />
				<Input
					labelText='Password'
					id='password'
					inputType='password'
					col='col-12'
				/>
				<Input
					labelText='Password confirmation'
					id='passwordConfirmation'
					inputType='password'
					col='col-12'
				/>

				<div className='col-12 d-flex flex-column align-items-center'>
					<Button type='submit' variant='primary' className='w-50'>
						Create an Account
					</Button>
				</div>
			</form>
		</div>
	);
};

export default Register;
