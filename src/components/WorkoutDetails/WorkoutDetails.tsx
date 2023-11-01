import React from 'react';
import './workoutDetails.scss';
import workoutPlaceholder from '../../images/workout-placeholder.jpg';
import ExerciseCard from '../ExerciseCard/ExerciseCard';

const WorkoutDetails = () => {
	return (
		<div className='workout-details m-auto d-flex flex-column align-items-center pt-5'>
			<div className='img-field'>
				<img className='workout-img' src={workoutPlaceholder} />
			</div>
			<div className='workout-content align-self-start'>
				<h2 className='text-white mt-4'>[Workout name]</h2>
				<p className='text-grey'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
					assumenda magni voluptatum harum unde fuga neque excepturi
					consequuntur praesentium quos rerum, a laborum nobis. Laboriosam
					recusandae, ipsam rem numquam neque accusantium harum nisi at illo,
					ipsum, perferendis magni praesentium saepe labore corporis suscipit
					sint. Dolores recusandae totam,
				</p>

				<div className='exercises-field mt-4'>
					<h3 className='text-white'>Exercises:</h3>
					<hr className='text-white' />
					<div className='exercises-list-field d-flex gap-3 flex-column'>
						<div className='sort-btn align-self-end bg-primary d-flex align-items-center justify-content-center'>
							<span className='text-white'>By name</span>
						</div>
						<ExerciseCard />
						<ExerciseCard />
					</div>
				</div>
			</div>
		</div>
	);
};

export default WorkoutDetails;
