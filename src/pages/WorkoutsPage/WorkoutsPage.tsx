import { seState, useState } from 'react';
import './workoutPage.scss';
import Workout from '../../components/WorkoutsPage/Workout/Workout';
import WorkoutDetails from '../../components/WorkoutsPage/WorkoutDetails/WorkoutDetails';
import { Button } from 'react-bootstrap';
import CreateWorkoutModal from '../../components/WorkoutsPage/CreateWorkoutModal/CreateWorkoutModal';
import { useSelector } from 'react-redux';
import { getWorkouts } from '../../features/workout/workoutSlice.ts';
import { getUserToken } from '../../features/auth/authSlice.ts';

const WorkoutsPage = () => {
	const [showCreateWorkoutModal, setShowCreateWorkoutModal] = useState(false);
	const workouts = useSelector(getWorkouts);

	const workoutsElement = workouts.map((workout) => (
		<Workout
			key={workout.id}
			id={workout.id}
			workoutName={workout.workoutName}
			isFavourite={workout.isFavourite}
			isSelected={workout.isSelected}
		/>
	));

	const handleShowCreateWorkoutModal = () => {
		setShowCreateWorkoutModal((prevState) => !prevState);
	};

	const handleCloseCreateWorkoutModal = () => {};

	return (
		<div className='workout-page d-flex'>
			<div className='workout-cards-field d-flex flex-column align-items-center pt-5'>
				<div className='workout-cards-field-header w-100 d-flex align-items-center justify-content-between'>
					<h1 className='ms-4 text-white'>My Workouts</h1>
					<Button
						variant='secondary'
						className='me-5'
						onClick={handleShowCreateWorkoutModal}
						data-bs-theme='light'
					>
						+
					</Button>
				</div>
				<div className='workouts-field d-flex flex-column align-items-center gap-3 mt-3'>
					{workoutsElement}
				</div>
			</div>
			<div className='workout-details-field bg-secondary'>
				{/*{selectedWorkout && (*/}
				{/*	<WorkoutDetails workoutName={selectedWorkout.workoutName} />*/}
				{/*)}*/}
			</div>
			<CreateWorkoutModal
				show={showCreateWorkoutModal}
				handleClose={handleShowCreateWorkoutModal}
			/>
		</div>
	);
};

export default WorkoutsPage;
