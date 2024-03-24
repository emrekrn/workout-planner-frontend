import './exerciseCard.scss';
import { ExerciseData, SetData } from '../../../model/WorkoutDataModel.ts';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons/faEllipsisVertical';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ListGroup } from 'react-bootstrap';
import { useState } from 'react';
import DeleteModal from '../../ui/DeleteModal/DeleteModal.tsx';
import {
	deleteExercise,
	deleteWorkout,
	editExercise,
	editWorkout,
	getExerciseById,
	getWorkoutById,
} from '../../../features/workout/workoutSlice.ts';
import { useAppDispatch } from '../../../app/hooks.ts';
import { Action } from '@reduxjs/toolkit';
import EditModal from '../../ui/EditModal/EditModal.tsx';
import { useSelector } from 'react-redux';

const Set = ({ setId, setNumber, repeat }: SetData) => {
	return (
		<div className='set-card d-flex justify-content-center bg-secondary'>
			{setNumber}x{repeat}
		</div>
	);
};

const ExerciseCard = ({ exerciseId, exerciseName, sets }: ExerciseData) => {
	const dispatch = useAppDispatch();
	const [showSettings, setShowSettings] = useState(false);
	const [showEditExerciseModal, setShowEditExerciseModal] = useState(false);
	const [showDeleteExerciseModal, setShowDeleteExerciseModal] = useState(false);
	const setsElement = sets.map((set) => (
		<Set
			key={set.setId}
			setId={set.setId}
			setNumber={set.setNumber}
			repeat={set.repeat}
		/>
	));

	const handleClose = () => {
		setShowDeleteExerciseModal(false);
		setShowEditExerciseModal(false);
	};
	return (
		<div className='exercise-card bg-primary p-3'>
			<DeleteModal
				id={exerciseId}
				name={exerciseName}
				show={showDeleteExerciseModal}
				handleClose={handleClose}
				dispatchFunction={() => deleteExercise({ id: exerciseId }) as Action}
			/>

			<EditModal
				id={exerciseId}
				inputName='exerciseName'
				data={(state, exerciseId) => getExerciseById(state, exerciseId)}
				show={showEditExerciseModal}
				handleClose={() => setShowEditExerciseModal((prevState) => !prevState)}
				dispatchFunction={(workoutName: string) =>
					editExercise({ id: exerciseId, exerciseName: workoutName }) as Action
				}
			/>

			<div className='d-flex align-items-center justify-content-between'>
				<div className='exercise-name text-white'>{exerciseName}</div>
				<div
					className='position-relative'
					onMouseEnter={() => setShowSettings(true)}
					onMouseLeave={() => setShowSettings(false)}
				>
					<div className='btn-div bg-secondary d-flex align-items-center justify-content-center '>
						<FontAwesomeIcon icon={faEllipsisVertical} />
					</div>
					<div className='exercise-settings position-absolute bg-secondary d-flex align-items-center justify-content-center'>
						{showSettings && (
							<ListGroup data-bs-theme='dark' className='w-100'>
								<ListGroup.Item
									action
									onClick={() => setShowEditExerciseModal(true)}
								>
									Edit Exercise
								</ListGroup.Item>
								<ListGroup.Item
									action
									onClick={() => setShowDeleteExerciseModal(true)}
								>
									Delete Execise
								</ListGroup.Item>
							</ListGroup>
						)}
					</div>
				</div>
			</div>
			<div className='exercise-info text-white d-flex gap-3 mt-2'>
				{setsElement}
			</div>
		</div>
	);
};

export default ExerciseCard;
