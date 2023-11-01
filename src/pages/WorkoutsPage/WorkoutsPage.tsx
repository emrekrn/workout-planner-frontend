import React from 'react';
import './workoutPage.scss';
import Workout from '../../components/Workout/Workout';
import WorkoutDetails from '../../components/WorkoutDetails/WorkoutDetails';

const WorkoutsPage = () => {
	return (
		<div className='workout-page d-flex'>
			<div className='workout-cards-field d-flex flex-column align-items-center pt-5 gap-4'>
				<h1 className='align-self-start ms-5 mb-3 text-white'>My Workouts</h1>
				<Workout />
				<Workout />
			</div>
			<div className='workout-details-field bg-secondary'>
				<WorkoutDetails />
			</div>
		</div>
	);
};

export default WorkoutsPage;
