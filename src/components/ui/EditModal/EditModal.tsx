import React, { FormEvent, SetStateAction, useState } from 'react';
import './editModal.scss';
import { Modal, Button, Card } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import {
	editWorkout,
	getWorkoutById,
} from '../../../features/workout/workoutSlice.ts';
import { ExerciseData, WorkoutData } from '../../../model/WorkoutDataModel.ts';
import { useAppDispatch } from '../../../app/hooks.ts';
import { Action, Dispatch, Selector } from '@reduxjs/toolkit';

interface CreateWorkoutModalProps {
	id: number;
	inputName: string;
	show: boolean;
	handleClose: () => void;
	data: Selector;
	dispatchFunction: (text: string) => Action;
}

const EditModal = ({
	id,
	inputName,
	show,
	handleClose,
	data,
	dispatchFunction,
}: CreateWorkoutModalProps) => {
	const dispatch = useAppDispatch();
	const [value, setValue] = useState(useSelector((state) => data(state, id)));
	console.log(value);
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setValue((prevState) => {
			return {
				...prevState,
				[e.target.name]: [e.target.value],
			};
		});
	};
	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const input = e.currentTarget.elements.namedItem(
			inputName
		) as HTMLInputElement;
		console.log(input.value);
		dispatch(dispatchFunction(value!.exerciseName || value!.workoutName));
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
								<label htmlFor={inputName} className='form-label text-white'>
									Workout name:
								</label>
								<input
									type='text'
									className='form-control bg-primary border-secondary text-white'
									id={inputName}
									name={inputName}
									value={value!.exerciseName || value!.workoutName}
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

export default EditModal;
