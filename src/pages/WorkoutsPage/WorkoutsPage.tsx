import React, { useState } from 'react';
import './workoutPage.scss';
import Workout from '../../components/WorkoutsPage/Workout/Workout';
import WorkoutDetails from '../../components/WorkoutsPage/WorkoutDetails/WorkoutDetails';
import { Button } from 'react-bootstrap';
import CreateWorkoutModal from '../../components/WorkoutsPage/CreateWorkoutModal/CreateWorkoutModal';
import { WorkoutData } from '../../model/WorkoutDataModel';
import { workoutData } from '../../utils/testData/data';

const WorkoutsPage = () => {
	const [show, setShow] = useState<boolean>(false);
	const [workoutDataState, setWorkoutDataState] =
		useState<WorkoutData[]>(workoutData);

	const workoutJSX = workoutDataState.map(
		({ id, workoutName, workoutCategory, isFavourite, exerciseNumber }) => (
			<Workout
				key={id}
				workoutName={workoutName}
				workoutCategory={workoutCategory}
				isFavourite={isFavourite}
				exerciseNumber={exerciseNumber}
			/>
		)
	);

	const handleShow = () => {
		setShow(true);
	};

	const handleModalClose = () => {
		setShow(false);
	};

	return (
		<div className='workout-page d-flex'>
			<div className='workout-cards-field d-flex flex-column align-items-center pt-5 gap-4'>
				<div className='workout-cards-field-header w-100 d-flex align-items-center justify-content-between'>
					<h1 className='ms-5 mb-3 text-white'>My Workouts</h1>
					<Button
						variant='secondary'
						className='me-5'
						onClick={handleShow}
						data-bs-theme='light'
					>
						+
					</Button>
				</div>
				{workoutJSX}
			</div>
			<div className='workout-details-field bg-secondary'>
				<WorkoutDetails />
			</div>
			<CreateWorkoutModal show={show} handleClose={handleModalClose} />
		</div>
	);
};

export default WorkoutsPage;
