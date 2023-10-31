import React from 'react';
import './workoutPage.scss';
import Workout from '../../components/Workout/Workout';

const WorkoutsPage = () => {
	return (
		<div className='workout-page d-flex'>
			<div className='workout-cards-field d-flex flex-column align-items-center pt-5'>
				<Workout />
			</div>
			<div className='workout-details-field'></div>
		</div>
	);
};

export default WorkoutsPage;
