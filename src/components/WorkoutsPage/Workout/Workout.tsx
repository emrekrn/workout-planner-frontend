import React from 'react';
import './workout.scss';
import workoutImg from '../../../images/workout-placeholder.jpg';
import { faBookmark as faBookmarkRegular } from '@fortawesome/free-regular-svg-icons';
import { faBookmark as faBookmarkSolid } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface WorkoutProps {
	id: number;
	workoutName: string;
	isFavourite: boolean;
	updateWorkoutIfFavourite: (id: number) => void;
}

const Workout = ({
	id,
	workoutName,
	isFavourite,
	updateWorkoutIfFavourite,
}: WorkoutProps) => {
	return (
		<div
			className={`workout-card d-flex align-items-center gap-3 ${
				isFavourite ? 'selected' : 'bg-secondary'
			}`}
			onClick={() => {}}
		>
			<div className='workout-image-container p-1'>
				<img className='workout-image' src={workoutImg} />
			</div>
			<div className='workout-info-field h-100'>
				<div className='header d-flex align-items-center justify-content-between'>
					<h4 className='text-white'>{workoutName}</h4>
					<div
						className='favourite-btn-field bg-primary d-flex align-items-center justify-content-center'
						onClick={() => updateWorkoutIfFavourite(id)}
					>
						{isFavourite ? (
							<FontAwesomeIcon className='text-white' icon={faBookmarkSolid} />
						) : (
							<FontAwesomeIcon
								className='text-white '
								icon={faBookmarkRegular}
							/>
						)}
					</div>
				</div>
				<div className='body d-flex flex-column gap-1 align-items-start '>
					<div className='body-card bg-primary px-2'>
						<span className='text-white'>[Workout Category]</span>
					</div>
					<div className='body-card bg-primary px-2'>
						<span className='text-white'>Exercises: [exerciseNumber]</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Workout;
