import React, { FormEvent, useState } from 'react';
import './editModal.scss';
import { Modal, Button, Card } from 'react-bootstrap';
import { useAppDispatch } from '../../../app/hooks.ts';
import { RootState } from '../../../app/store.ts';
import {
	editWorkout,
	getExerciseById,
	getWorkoutById,
} from '../../../features/workout/workoutSlice.ts';
import { useSelector } from 'react-redux';
import { WorkoutData } from '../../../model/WorkoutDataModel.ts';
import { ExerciseData } from '../../../model/ExerciseData.ts';

interface EditExerciseModalProps {
	id: number;
	show: boolean;
	handleClose: () => void;
}

const EditExerciseModal = ({
	id,
	show,
	handleClose,
}: EditExerciseModalProps) => {
	const dispatch = useAppDispatch();
	const [value, setValue] = useState<ExerciseData>(
		useSelector((state: RootState) =>
			getExerciseById(state, id)
		) as ExerciseData
	);
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		console.log(value);
		setValue((prevState) => {
			return {
				...prevState,
				[e.target.name]: e.target.value,
			};
		});
	};
	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const input = e.currentTarget.elements.namedItem(
			'workoutName'
		) as HTMLInputElement;
		dispatch(editWorkout({ id: id, workoutName: input.value }));
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
								<label
									htmlFor={'workoutName'}
									className='form-label text-white'
								>
									Workout name:
								</label>
								<input
									type='text'
									className='form-control bg-primary border-secondary text-white'
									id={'workoutName'}
									name={'workoutName'}
									value={value.exerciseName}
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
								Edit
							</Button>
						</Card.Footer>
					</form>
				</Card>
			</Modal>
		</>
	);
};

export default EditExerciseModal;