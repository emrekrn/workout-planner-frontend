import React, { useState } from 'react';
import './workout.scss';
import workoutImg from '../../../images/workout-placeholder.jpg';
import { faBookmark as faBookmarkRegular } from '@fortawesome/free-regular-svg-icons';
import {
	faBookmark as faBookmarkSolid,
	faPen,
	faX,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import DeleteWorkoutModal from '../DeleteWorkoutModal/DeleteWorkoutModal';

interface WorkoutProps {
	id: number;
	workoutName: string;
	isFavourite: boolean;
	updateWorkoutIfFavourite: (id: number) => void;
	selectWorkout: (id: number) => void;
	selectedWorkoutId: number;
	setSelectedWorkoutId: React.Dispatch<React.SetStateAction<number>>;
	updateWorkoudDataStateOnDeleteWorkout: (id: number) => void;
}

const Workout = ({
	id,
	workoutName,
	isFavourite,
	updateWorkoutIfFavourite,
	selectWorkout,
	selectedWorkoutId,
	setSelectedWorkoutId,
	updateWorkoudDataStateOnDeleteWorkout,
}: WorkoutProps) => {
	const [showDeleteWorkoutModal, setShowDeleteWorkoutModal] = useState(false);

	const handleShowDeleteWorkoutModal = () => {
		setShowDeleteWorkoutModal(true);
	};

	const handleCloseDeleteWorkoutModal = () => {
		setShowDeleteWorkoutModal(false);
	};

	return (
		<>
			<DeleteWorkoutModal
				id={id}
				show={showDeleteWorkoutModal}
				handleClose={handleCloseDeleteWorkoutModal}
				updateWorkoutDataStateOnDeleteWorkout={
					updateWorkoudDataStateOnDeleteWorkout
				}
			/>
			<div
				className={`workout-card d-flex align-items-center gap-3 ${
					selectedWorkoutId == id ? 'selected' : 'bg-secondary'
				}`}
				onClick={() => {
					selectWorkout(id);
					setSelectedWorkoutId(id);
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
								<span className='text-white'>[Workout Category]</span>
							</div>
							<div className='body-card bg-primary px-2'>
								<span className='text-white'>Exercises: [exerciseNumber]</span>
							</div>
						</div>
					</div>
					<div className='workout-btn-field'>
						<div
							className='favourite-btn-div bg-primary d-flex align-items-center justify-content-center'
							onClick={() => updateWorkoutIfFavourite(id)}
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
							onClick={() => handleShowDeleteWorkoutModal()}
							// onClick={() => updateWorkoudDataStateOnDeleteWorkout(id)}
						>
							<FontAwesomeIcon className='text-white' icon={faX} />
						</div>
						<div className='favourite-btn-div bg-primary d-flex align-items-center justify-content-center'>
							<FontAwesomeIcon className='text-white' icon={faPen} />
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Workout;
