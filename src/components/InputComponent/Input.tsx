// Title
// Placeholder
// valid and invalid texts
// type
// id

import { ChangeEvent, Dispatch, SetStateAction } from 'react';

// TODO add validation

interface InputProps {
	labelText: string;
	id: string;
	inputType: 'text' | 'email' | 'password';
	col: 'col-4' | 'col-6' | 'col-8' | 'col-12';
	setFunction: Dispatch<SetStateAction<string>>;
}

const Input = ({ labelText, id, inputType, col, setFunction }: InputProps) => {
	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setFunction(e.target.value);
	};

	return (
		<div className={'mb-3 ' + col}>
			<label htmlFor={id} className='form-label text-white'>
				{labelText}
			</label>
			<input
				type={inputType}
				className='form-control bg-primary border-secondary text-white'
				id={id}
				onChange={(e) => handleChange(e)}
				required
			/>
		</div>
	);
};

export default Input;
