import React, { FormEvent, useState } from 'react';
import './editWorkoutModal.scss';
import { Modal, Button, Card } from 'react-bootstrap';
import Input from '../../ui/Input';
import { useDispatch, useSelector } from 'react-redux';
import {
	createWorkout,
	editWorkout,
	getWorkoutById,
} from '../../../features/workout/workoutSlice.ts';
import { WorkoutData } from '../../../model/WorkoutDataModel.ts';
import { useAppDispatch } from '../../../app/hooks.ts';

interface CreateWorkoutModalProps {
	id: number;
	show: boolean;
	handleClose: () => void;
}

const EditWorkoutModal = ({
	id,
	show,
	handleClose,
}: CreateWorkoutModalProps) => {
	const dispatch = useAppDispatch();
	const [workout, setWorkout] = useState(
		useSelector((state) => getWorkoutById(state, id)) as WorkoutData
	);
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setWorkout((prevState) => {
			return {
				...prevState,
				[e.target.name]: [e.target.value],
			};
		});
	};
	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		dispatch(editWorkout({ id: id, workoutName: workout.workoutName }));
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
						<Card.Header as='h3'>Edit Workout</Card.Header>
						<Card.Body>
							<div className='mb-3 '>
								<label htmlFor='workoutName' className='form-label text-white'>
									Workout name:
								</label>
								<input
									type='text'
									className='form-control bg-primary border-secondary text-white'
									id='workoutName'
									name='workoutName'
									value={workout.workoutName}
									onChange={handleChange}
									required
								/>
							</div>
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

export default EditWorkoutModal;
