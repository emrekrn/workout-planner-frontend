// Title
// Placeholder
// valid and invalid texts
// type
// id

// TODO add validation

interface InputProps {
	labelText: string;
	id: string;
	inputType: 'text' | 'email' | 'password';
	col: 'col-4' | 'col-6' | 'col-8' | 'col-12';
}

const Input = ({ labelText, id, inputType, col }: InputProps) => {
	return (
		<div className={'mb-3 ' + col}>
			<label htmlFor={id} className='form-label text-white'>
				{labelText}
			</label>
			<input
				type={inputType}
				className='form-control bg-primary border-secondary text-white'
				id={id}
				required
			/>
		</div>
	);
};

export default Input;
