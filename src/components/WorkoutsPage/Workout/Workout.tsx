import React, { useState } from 'react';
import './workout.scss';
import workoutImg from '../../../images/workout-placeholder.jpg';
import { faBookmark as faBookmarkRegular } from '@fortawesome/free-regular-svg-icons';
import { faBookmark as faBookmarkSolid } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Workout = () => {
	const [isFavourite, setIsFavourite] = useState<boolean>(true);

	const handleFavClick = () => {
		setIsFavourite((prev) => !prev);
	};
	return (
		<div className='workout-card bg-secondary d-flex align-items-center gap-3'>
			<div className='workout-image-container p-1'>
				<img className='workout-image' src={workoutImg} />
			</div>
			<div className='workout-info-field h-100'>
				<div className='header d-flex align-items-center justify-content-between'>
					<h4 className='text-white'>[Workout name]</h4>
					<div
						className='favourite-btn-field bg-primary d-flex align-items-center justify-content-center'
						onClick={() => handleFavClick()}
					>
						{isFavourite ? (
							<FontAwesomeIcon
								className='text-white'
								icon={faBookmarkRegular}
							/>
						) : (
							<FontAwesomeIcon className='text-white ' icon={faBookmarkSolid} />
						)}
					</div>
				</div>
				<div className='body d-flex flex-column gap-1 align-items-start '>
					<div className='body-card bg-primary px-2'>
						<span className='text-white'>Category</span>
					</div>
					<div className='body-card bg-primary px-2'>
						<span className='text-white'>Exercises: 5</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Workout;
