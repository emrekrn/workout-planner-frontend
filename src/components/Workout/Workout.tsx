import React from 'react';
import './workout.scss';
import workoutImg from '../../images/workout-placeholder.jpg';

const Workout = () => {
	return (
		<div className='workout-card bg-secondary d-flex align-items-center'>
			<div className='workout-image-container'>
				<img className='workout-image' src={workoutImg} />
			</div>
		</div>
	);
};

export default Workout;
