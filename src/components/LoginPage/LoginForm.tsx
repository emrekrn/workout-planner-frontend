import '../../assets/style/login.scss';
import Input from '../ui/Input';
import { Button } from 'react-bootstrap';
import { useAppDispatch } from '../../app/hooks.ts';
import { logIn } from '../../features/auth/authSlice.ts';
import { FormEvent } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
	const dispatch = useAppDispatch();

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const email = e.currentTarget.elements.namedItem(
			'email'
		) as HTMLInputElement;
		const password = e.currentTarget.elements.namedItem(
			'password'
		) as HTMLInputElement;
		console.log(`Email: ${email.value}`);
		console.log(`Password: ${password.value}`);

		dispatch(logIn({ userId: 20, userToken: 3, status: 'loggedIn' }));
	};

	return (
		<div className='login-field p-2'>
			<h1 className='text-white'>Log in</h1>
			<p className='text-grey'>
				Don't have an account yet?
				<Link className='create-account-link mx-2' to='/register'>
					Create an account
				</Link>
			</p>
			<form onSubmit={(e) => handleSubmit(e)} noValidate>
				<Input labelText='Email' id='email' inputType='text' col='col-12' />
				<Input
					labelText='Password '
					id='password'
					inputType='password'
					col='col-12'
				/>
				<div className='col-12 d-flex flex-column align-items-center'>
					<Button type='submit' variant='primary' className='w-25'>
						Log in
					</Button>
				</div>
			</form>
		</div>
	);
};

export default Login;
