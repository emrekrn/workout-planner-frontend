import './workoutDetails.scss';
import workoutPlaceholder from '../../../assets/images/workout-placeholder.jpg';
import ExerciseCard from '../ExerciseCard/ExerciseCard';
import { useSelector } from 'react-redux';
import {
	getSelectedWorkout,
	setWorkoutFavourite,
} from '../../../features/workout/workoutSlice.ts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark as faBookmarkSolid } from '@fortawesome/free-solid-svg-icons';
import { faBookmark as faBookmarkRegular } from '@fortawesome/free-regular-svg-icons';
import { useAppDispatch } from '../../../app/hooks.ts';

const WorkoutDetails = () => {
	const dispatch = useAppDispatch();
	const workout = useSelector(getSelectedWorkout)!;
	const exerciseElements = workout.exercises.map((exercise) => (
		<ExerciseCard
			key={exercise.exerciseId}
			exerciseId={exercise.exerciseId}
			exerciseName={exercise.exerciseName}
			sets={exercise.sets}
		/>
	));
	return (
		<div className='workout-details m-auto d-flex flex-column align-items-center pt-5'>
			<div className='img-field'>
				<img className='workout-img' src={workoutPlaceholder} />
			</div>
			<div className='workout-content align-self-start '>
				<div className='workout-content-header mt-4 d-flex align-items-center justify-content-between'>
					<h2 className='text-white'>{workout.workoutName}</h2>
					<div
						className='favourite-btn-div bg-primary d-flex align-items-center justify-content-center'
						onClick={() => dispatch(setWorkoutFavourite({ id: workout.id }))}
					>
						{workout.isFavourite ? (
							<FontAwesomeIcon className='text-white' icon={faBookmarkSolid} />
						) : (
							<FontAwesomeIcon
								className='text-white '
								icon={faBookmarkRegular}
							/>
						)}
					</div>
				</div>
				<p className='text-grey'>{workout.workoutDescription}</p>

				<div className='exercises-field mt-4'>
					<div className='exercises-field-header d-flex align-items-center justify-content-between'>
						<h3 className='text-white mb-0'>Exercises:</h3>
					</div>
					<hr className='text-white' />
					<div className='exercises-list-field d-flex gap-3 flex-column'>
						{exerciseElements}
					</div>
				</div>
			</div>
		</div>
	);
};

export default WorkoutDetails;
