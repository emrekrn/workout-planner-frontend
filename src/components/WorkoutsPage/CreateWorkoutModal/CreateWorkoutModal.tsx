import React, { FormEvent, useContext, useState } from 'react';
import './createWorkoutModal.scss';
import { Modal, Button, Card } from 'react-bootstrap';
import Input from '../../InputComponent/Input';
import { WorkoutData } from '../../../model/WorkoutDataModel';
import { createWorkout } from '../../../services/api';
import { UserAuthenticationContext } from '../../../context/UserAuthenticationContext';

interface CreateWorkoutModalProps {
	show: boolean;
	handleClose: () => void;
	updateWorkoutDataStateOnCreateFormSubmit: (workoutData: WorkoutData) => void;
}

const CreateWorkoutModal = ({
	show,
	handleClose,
	updateWorkoutDataStateOnCreateFormSubmit,
}: CreateWorkoutModalProps) => {
	const [workoutName, setWorkoutName] = useState('');
	const [workoutCategory, setWorkoutCategory] = useState('');
	const { userId } = useContext(UserAuthenticationContext);

	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault();
		try {
			const response = await createWorkout({ workoutName, userId: userId! });
			console.log(response);
			if (response.status == 201) {
				updateWorkoutDataStateOnCreateFormSubmit(response.data);
			} else {
				console.log(
					`Workout couldn't be created.Status code :${response.status}`
				);
			}
		} catch (err) {
			console.log(err);
		}
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
					<form onSubmit={handleSubmit} noValidate>
						<Card.Header as='h3'>Create Workout</Card.Header>
						<Card.Body>
							<Input
								id='workoutName'
								labelText='Name'
								col='col-12'
								inputType='text'
								setFunction={setWorkoutName}
							/>
							<Input
								id='workoutCategory'
								labelText='Category'
								col='col-12'
								inputType='text'
								setFunction={setWorkoutCategory}
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
