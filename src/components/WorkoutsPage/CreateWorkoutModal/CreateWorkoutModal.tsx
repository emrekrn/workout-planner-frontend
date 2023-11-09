import React, { ChangeEvent, FormEvent, useState } from 'react';
import './createWorkoutModal.scss';
import { Modal, Button, Card } from 'react-bootstrap';
import Input from '../../InputComponent/Input';

interface CreateWorkoutModalProps {
	show: boolean;
	handleClose: () => void;
}

const CreateWorkoutModal = ({ show, handleClose }: CreateWorkoutModalProps) => {
	const [workoutName, setWorkoutName] = useState<string>('');
	const [workoutDescription, setWorkoutDescription] = useState<string>('');
	const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
		setWorkoutDescription(e.target.value);
	};
	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
		console.log(workoutName);
		console.log(workoutDescription);
	};
	return (
		<>
			<Modal
				data-bs-theme='dark'
				show={show}
				onHide={handleClose}
				backdrop='static'
				keyboard={true}
			>
				<Card className='bg-primary'>
					<form onSubmit={handleSubmit}>
						<Card.Header as='h3'>Create Workout</Card.Header>
						<Card.Body>
							<Input
								id='workoutName'
								labelText='Name'
								col='col-12'
								inputType='text'
								setFunction={setWorkoutName}
							/>
							<label className='mb-1' htmlFor='workout-description'>
								Description:
							</label>
							<textarea
								id='workout-description'
								className='workout-description form-control bg-primary border-secondary text-white'
								name='Text1'
								rows={5}
								onChange={(e) => handleChange(e)}
							/>
						</Card.Body>
						<Card.Footer className='d-flex justify-content-end gap-3'>
							<Button variant='grey' onClick={handleClose}>
								Close
							</Button>
							<Button type='submit' variant='secondary' onClick={handleClose}>
								Create
							</Button>
						</Card.Footer>
					</form>
				</Card>
			</Modal>
		</>
	);
};

export default CreateWorkoutModal;
