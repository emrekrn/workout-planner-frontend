import { FormEvent, useContext, useState } from 'react';
import './register.scss';
import Input from '../../InputComponent/Input';
import { Button } from 'react-bootstrap';
import { registerUser } from '../../../services/api';
import { UserAuthenticationContext } from '../../../context/UserAuthenticationContext';

const Register = () => {
	const [firstName, setFirstName] = useState<string>('');
	const [lastName, setLastName] = useState<string>('');
	const [username, setUsername] = useState<string>('');
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const [passwordConfirmation, setPasswordConfirmation] = useState<string>('');

	const { setUserToken, setUserId, userId, userToken } = useContext(
		UserAuthenticationContext
	);

	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault();

		const response = await registerUser({
			firstName: firstName,
			lastName: lastName,
			username: username,
			email: email,
			password: password,
			passwordConfirmation: passwordConfirmation,
		});

		if (response.status == 200) {
			setUserId(response.data.userId);
			setUserToken(response.data.userId);
		}
		console.log(userId);
		console.log(userToken);
	};

	return (
		<div className='register-field p-2'>
			<h1 className='text-white'>Register</h1>
			<p className='text-grey'>
				Already hav an account?
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

				<div className='col-12 d-flex justify-content-center'>
					<Button type='submit' variant='primary' className='w-50'>
						Create an Account
					</Button>
				</div>
			</form>
		</div>
	);
};

export default Register;
