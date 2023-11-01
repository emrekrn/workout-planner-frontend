import React from 'react';
import './workoutDetails.scss';
import workoutPlaceholder from '../../images/workout-placeholder.jpg';

const WorkoutDetails = () => {
	return (
		<div className='workout-details m-auto d-flex flex-column align-items-center pt-5'>
			<div className='img-field'>
				<img className='workout-img' src={workoutPlaceholder} />
			</div>
			<div className='workout-content align-self-start'>
				<h2 className='text-white mt-4'>[Workout name]</h2>
			</div>
		</div>
	);
};

export default WorkoutDetails;
