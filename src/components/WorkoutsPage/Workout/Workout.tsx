import './workout.scss';
import workoutImg from '../../../assets/images/workout-placeholder.jpg';
import { faBookmark as faBookmarkRegular } from '@fortawesome/free-regular-svg-icons';
import {
	faBookmark as faBookmarkSolid,
	faPen,
	faX,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import DeleteModal from '../../ui/DeleteModal/DeleteModal.tsx';
import {
	deleteWorkout,
	editWorkout,
	getWorkoutById,
	setWorkoutFavourite,
	setWorkoutSelected,
} from '../../../features/workout/workoutSlice.ts';
import { useAppDispatch } from '../../../app/hooks.ts';
import { useState } from 'react';
import EditModal from '../../ui/EditModal/EditModal.tsx';
import { Action } from '@reduxjs/toolkit';
import { RootState } from '../../../app/store.ts';
import EditWorkoutModal from '../../ui/EditModal/EditWorkoutModal.tsx';

interface WorkoutProps {
	id: number;
	workoutName: string;
	workoutCategory: string;
	exerciseNumber: number;
	isFavourite: boolean;
	isSelected: boolean;
}

const Workout = ({
	id,
	workoutName,
	workoutCategory,
	exerciseNumber,
	isFavourite,
	isSelected,
}: WorkoutProps) => {
	const dispatch = useAppDispatch();
	const [showDeleteWorkoutModal, setShowDeleteWorkoutModal] = useState(false);
	const [showEditWorkoutModal, setShowEditWorkoutModal] = useState(false);

	return (
		<>
			<DeleteModal
				name={workoutName}
				show={showDeleteWorkoutModal}
				handleClose={() => setShowDeleteWorkoutModal((prevState) => !prevState)}
				dispatchFunction={() => deleteWorkout({ id }) as Action}
			/>
			<EditWorkoutModal
				id={id}
				show={showEditWorkoutModal}
				handleClose={() => setShowEditWorkoutModal((prevState) => !prevState)}
			/>
			<div
				className={`workout-card d-flex align-items-center gap-3 
				${isSelected ? 'selected' : 'bg-secondary'}
				`}
				onClick={() => {
					dispatch(setWorkoutSelected({ id }));
				}}
			>
				<div className='workout-image-container p-1'>
					<img className='workout-image' src={workoutImg} />
				</div>
				<div className='workout-info-field d-flex h-100'>
					<div className='header flex-grow-1 d-flex flex-column'>
						<h4 className='text-white'>{workoutName}</h4>
						<div className='body d-flex flex-column gap-1 align-items-start '>
							<div className='body-card bg-primary px-2'>
								<span className='text-white'>{workoutCategory}</span>
							</div>
							<div className='body-card bg-primary px-2'>
								<span className='text-white'>Exercises: {exerciseNumber}</span>
							</div>
						</div>
					</div>
					<div className='workout-btn-field'>
						<div
							className='favourite-btn-div bg-primary d-flex align-items-center justify-content-center'
							onClick={() => dispatch(setWorkoutFavourite({ id }))}
						>
							{isFavourite ? (
								<FontAwesomeIcon
									className='text-white'
									icon={faBookmarkSolid}
								/>
							) : (
								<FontAwesomeIcon
									className='text-white '
									icon={faBookmarkRegular}
								/>
							)}
						</div>
						<div
							className='favourite-btn-div bg-danger d-flex align-items-center justify-content-center'
							onClick={() =>
								setShowDeleteWorkoutModal((prevState) => !prevState)
							}
						>
							<FontAwesomeIcon className='text-white' icon={faX} />
						</div>
						<div
							className='favourite-btn-div bg-primary d-flex align-items-center justify-content-center'
							onClick={() => setShowEditWorkoutModal((prevState) => !prevState)}
						>
							<FontAwesomeIcon className='text-white' icon={faPen} />
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Workout;
